interface AuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    signin(username: string): Promise<void>;
    signout(): Promise<void>;
  }
  
  /**
   * Some generic auth provider API, like Firebase.
   */
export const AppAuthProvider: AuthProvider = {
    isAuthenticated: false,
    username: null,
    async signin(username: string) {
      await new Promise((r) => setTimeout(r, 500)); // fake delay
      AppAuthProvider.isAuthenticated = true;
      AppAuthProvider.username = username;
    },
    async signout() {
      await new Promise((r) => setTimeout(r, 500)); // fake delay
      AppAuthProvider.isAuthenticated = false;
      AppAuthProvider.username = "";
    },
  };