import React from 'react';
import { Menu } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import { RocketFilled, GithubFilled, HomeFilled } from '@ant-design/icons';
import './App.css';
import Loading from './components/Loading/Loading'

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Profile = React.lazy(() => import('./components/Profile'));

function App() {
  return (
    <>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item icon={<HomeFilled />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<RocketFilled />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item icon={<GithubFilled />}>
          <Link to="/profile">Me</Link>
        </Menu.Item>
      </Menu>

      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </React.Suspense>
    </>
  );
}

export default App;
