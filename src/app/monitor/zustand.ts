import { create } from "zustand"; // Importa a função create da biblioteca Zustand para criar uma store.
import { persist } from "zustand/middleware"; // Importa o middleware persist para salvar o estado localmente (ex: localStorage).

// Define o tipo do estado que será usado na store.
type TimerState = {
  time: number; // Representa o tempo atual.
  setTime: (time: number) => void; // Função para definir o valor do tempo.
  isRunning: boolean; // Indica se o timer está rodando.
  toggleRunning: () => void; // Função para alternar o estado de isRunning.
  goal: number; // Meta de tempo que o usuário deseja atingir.
  setGoal: (goal: number) => void; // Função para definir o valor da meta.
  isPaused: boolean; // Indica se o timer está pausado.
  togglePaused: () => void; // Função para alternar o estado de pausa.
  isStopped: boolean; // Indica se o timer está parado.
  toggleStopped: () => void; // Função para alternar o estado de parado.
  runningExtraTime: boolean; // Indica se o timer está rodando em tempo extra (após atingir a meta).
  toggleRunningExtraTime: () => void; // Função para alternar o estado de tempo extra.
  reset: () => void; // Função para resetar o estado ao valor inicial.
};

// Define o estado inicial do timer.
const initialState = {
  time: 0, // O tempo começa em 0.
  goal: 0, // A meta de tempo começa em 0.
  isRunning: false, // O timer não está rodando inicialmente.
  isPaused: false, // O timer não está pausado inicialmente.
  isStopped: false, // O timer não está parado inicialmente.
  runningExtraTime: false, // O timer não está em tempo extra inicialmente.
};

// Cria a store do timer usando Zustand.
const useTimer = create<TimerState>()(
  persist(
    (set) => ({
      // Inicializa o estado com os valores iniciais.
      ...initialState,
      // Função para definir o valor de time.
      setTime: (time: number) => set({ time }),
      // Função para alternar o estado de isRunning, pausando e parando o timer.
      toggleRunning: () =>
        set((state: TimerState) => ({
          isRunning: !state.isRunning, // Alterna o valor de isRunning.
          isPaused: false, // Quando o timer está rodando, ele não pode estar pausado.
          isStopped: false, // Quando o timer está rodando, ele não pode estar parado.
        })),
      // Função para resetar o timer para o estado inicial.
      reset: () => set({ ...initialState }),
      // Função para definir o valor de goal.
      setGoal: (goal: number) => set({ goal }),
      // Função para alternar o estado de isPaused, parando o timer se pausado.
      togglePaused: () =>
        set((state: TimerState) => ({
          isPaused: !state.isPaused, // Alterna o valor de isPaused.
          isRunning: false, // Quando pausado, o timer não está rodando.
          isStopped: false, // Quando pausado, o timer não está parado.
        })),
      // Função para alternar o estado de isStopped, pausando e parando o timer.
      toggleStopped: () =>
        set((state: TimerState) => ({
          isStopped: !state.isStopped, // Alterna o valor de isStopped.
          isRunning: false, // Quando parado, o timer não está rodando.
          isPaused: false, // Quando parado, o timer não está pausado.
        })),
      // Função para alternar o estado de runningExtraTime.
      toggleRunningExtraTime: () =>
        set((state: TimerState) => ({
          runningExtraTime: !state.runningExtraTime, // Alterna o valor de runningExtraTime.
        })),
    }),
    {
      name: "timer", // Nome para salvar o estado no armazenamento local (ex: localStorage).
    }
  )
);

export default useTimer; // Exporta a store para ser usada em outros componentes.
