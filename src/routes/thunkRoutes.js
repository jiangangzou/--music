import React from 'react';
import { Route,Switch} from 'react-router-dom';
import {view as CelebrityPage } from '../pages/CelebrityPage';
import {view as ChartPage } from '../pages/ChartPage';
import {view as CinemaPage } from '../pages/CinemaPage';
import {view as MoviePage } from '../pages/SubjectPage';
import {view as ReviewPage } from '../pages/ReviewPage';
import {view as CommentPage } from '../pages/CommentPage';
import {view as SearchPage } from '../pages/SearchPage';
import {view as TagPage} from '../pages/TagPage';
import NotFoundPage from '../pages/404Page';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import DocumentTitle from 'react-document-title';

const SubjectRoute = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.path}/:id`} exact component={MoviePage} />
            <Route path={`${match.path}/:id/reviews`} component={ReviewPage} />
            <Route path={`${match.path}/:id/reviews?start=:start`}
    )
}