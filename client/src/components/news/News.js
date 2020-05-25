import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/actions/action';

const News = ({ getNews, article, user }) => {
    return (
        <div>
            <button onClick={getNews}>Press to see news</button>
            {/* {article.map((item) => (
                <h1>one</h1>
            ))}; */}
            {console.log({ article })}
            {(article) ? (
                article.map((item) => (
                    <h1>{item.title}</h1>
                ))
            ) : (<h2>nothing</h2>)}
            {(user) ? (
                <h2>{user}</h2>
            ) : (<h2>nothing</h2>)}
        </div>
    )
}

const mapDispatchToProps = {
    getNews: getNews,
};

const mapStateToProps = (state) => ({
    article: state.news,
    user:state.log,
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
