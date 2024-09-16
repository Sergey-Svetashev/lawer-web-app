import { atom, type PreinitializedWritableAtom } from "nanostores";

interface StateShape {
  toggleFormState: () => void;
}

export type HomeState = {
  isFormOpen: boolean;
};

export class State implements StateShape {
  public readonly home: PreinitializedWritableAtom<HomeState>;

  constructor() {
    this.home = atom({
      isFormOpen: false,
    });
  }

  toggleFormState = () => {
    const prev = this.home.get();

    this.home.set({ isFormOpen: !prev.isFormOpen });
  }
}

export const state = new State();

// export const state = atom({
//   isFormOpen: false,
// });

// export const toggleFormState = () => {
//     const prev = state.get();

//     state.set({ isFormOpen: !prev.isFormOpen });
//     console.log('in state', prev, !state.get())
//   }
