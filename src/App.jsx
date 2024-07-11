import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainContent, Hero } from './components';
import './styles/css/style.css';


ReactDOM.createRoot(document.body).render(
	<React.StrictMode>
		<Hero />
		<MainContent />
	</React.StrictMode>
);
