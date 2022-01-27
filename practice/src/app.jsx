import './app.css';
import Notice from './components/modal/modal';
import Clock from './components/lifecycle/Clock';
import Page from './components/pagination/Page';
import {StoreProvider} from "./components/mobx/states/context";
import { RootStore } from './components/mobx/states/rootStore';
import MobxComponent from './components/mobx/mobxComponent';
function App() {
  const rootStore = new RootStore();
  return (
    // <Notice></Notice>
    // <Clock></Clock>
    // <Page/>
    <StoreProvider value={rootStore}>
      <MobxComponent/>
    </StoreProvider>
  );
}

export default App;
