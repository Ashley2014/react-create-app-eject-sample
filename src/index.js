// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
import '../node_modules/antd/dist/antd.css'


import './index.less';
import dva from 'dva';
// import registerServiceWorker from './registerServiceWorker';


import router from './router';
import models from './models';
// import { Router, Route } from 'dva/router';

// ReactDOM.render(<App />, document.getElementById('root'));

// 1. Initialize
const app = dva({
    // history: browserHistory,
});

// 2. Plugins
// app.use({});


// 3. Model move to router
models.forEach((m) => {
    app.model(m);
});

// 4. Router
app.router(router);


// 5. Start
app.start('#root');




// registerServiceWorker();
