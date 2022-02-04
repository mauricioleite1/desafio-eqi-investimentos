import { InfoStorage } from './info';

const GlobalContext = ({ children }) => {
  return <InfoStorage>{children}</InfoStorage>;
};

export default GlobalContext;
