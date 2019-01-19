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
            <Route path={`${match.path}/:id/reviews?start=:start`} component={ReviewPage} />
            <Route path={`${match.path}/:comments`} component={CommentPage} />
            <Route path={`${match.path}/:id/comments?start=:start`} component={CommentPage} />
        </Switch>
    )
}

const CelebrityPage = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.path}/:id`} exact component={CelebrityPage} />
        </Switch>
    )
}

const ChartRoute = ({ match}) => {
    return (
        <Switch>
            <DocumentTitle title={'选电影'}>
                <Route path={`${match.path}`} exact component={ChartPage} />
            </DocumentTitle>
        </Switch>
    )
}

const CinemaPage = ({ page}) => {
    return (
        <Switch>
            <DocumentTitle title={'选电影'}>
                <Route path={`${match.path}`} exact component={CinemaPage} />
            </DocumentTitle>
        </Switch>
    )
}

const SearchRoute = ({ match, location }) => {
    console.log('Search route')
    return (
      <SearchPage query={location.search.substring(3)} />
    )
  }

const TagRoute = ({ match, location }) => {
    console.log('Tag route')
    return (
      <DocumentTitle title={'选影视'}>
        <TagPage query={location.search.substring(3)} />
      </DocumentTitle>
    )
  }

const NotFoundRoute = ({ match, location }) => {
    console.log('Tag route')
    return (
      <DocumentTitle title={'页面, 不存在的'}>
        <NotFoundPage />
      </DocumentTitle>
    )
  }

  export { NavBar, CelebrityRoute, ChartRoute, CinemaRoute, SearchRoute, TagRoute, SubjectRoute, NotFoundRoute, Footer }
  