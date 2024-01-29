import { create } from 'zustand';

export type AlertActionItem = {
  buttonType?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
};

type AlertInfo = {
  visible: boolean;
  title: string;
  message: string;
  actions: AlertActionItem[];
  onDismiss?: () => void;
};

const initialState = {
  visible: false,
  title: '',
  message: '',
  actions: [],
};

interface AlertStore {
  visible: boolean;
  title: string;
  message: string;
  actions: AlertActionItem[];
  showAlert: ({ title, message }: Omit<AlertInfo, 'visible'>) => void;
  onDismiss?: () => void;
  clear: () => void;
  getInfo: () => AlertInfo;
}

const useAlertStore = create<AlertStore>((set, get) => ({
  ...initialState,
  getInfo: () => {
    const { visible, title, message, actions, onDismiss } = get();
    return { visible, title, message, actions, onDismiss };
  },
  showAlert: (params) => set((state) => ({ ...state, ...params, visible: true })),
  onDismiss: () => set((state) => ({ ...state, visible: false })),
  clear: () => set(initialState),
}));

export default useAlertStore;
