import { UserProfileState } from '../interfaces/UserProfileState';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const userProfileStateInitial: UserProfileState = {
  userName: '',
  userEmail: '',
  isLogged: false,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(userProfileStateInitial),
  withMethods((store) => ({
    setIsLogged(logged: boolean, name: string, email: string) {
      patchState(store, {
        isLogged: logged,
        userName: name,
        userEmail: email,
      });
    },
  }))
);
