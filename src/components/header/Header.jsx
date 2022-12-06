import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import QuotePage from '../quote-page/quote';
import HomePage from '../home-page/home';
import CalculatorPage from '../calculator-page/calc-page';

const Header = () => (
  <>
    <Router>
      <div className="HeaderContainer">
        <h1 className="Title">Math magicians</h1>

        <nav className="Nav-container">
          <Link style={{ textDecoration: 'none' }} to="/"> Home </Link>
          <Link ClassName="navLink" style={{ textDecoration: 'none' }} to="/calculator"> calculator </Link>
          <Link style={{ textDecoration: 'none' }} to="/quote"> Quote </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </Router>
  </>
);
// eslint-disable-next-line import/prefer-default-export
export default Header;
