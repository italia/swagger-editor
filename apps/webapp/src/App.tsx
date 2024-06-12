import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-lora';
import 'typeface-roboto-mono';
import 'typeface-titillium-web';

import './App.scss';

import { Header, HeaderBrand, HeaderContent, HeaderRightZone, HeaderSocialsZone, Icon } from 'design-react-kit';
import { SchemaEditor } from '@italia/schema-editor';
import '@italia/schema-editor/dist/style.css';

function App() {
  return (
    <>
      <Header type="center">
        <HeaderContent>
          <HeaderBrand iconAlt="it code circle icon" iconName="it-code-circle">
            <h2>Schema Editor</h2>
            <h3>Italian OpenAPI Schema Editor</h3>
          </HeaderBrand>
          <HeaderRightZone>
            <HeaderSocialsZone label="Info + Repo">
              <ul>
                <li>
                  <a aria-label="Github" href="#" target="_blank">
                    <Icon icon="it-github" />
                  </a>
                </li>
              </ul>
            </HeaderSocialsZone>
          </HeaderRightZone>
        </HeaderContent>
      </Header>

      <div className="app-container">
        <SchemaEditor />
      </div>
    </>
  );
}

export default App;
