import React, { Component } from 'react';

// Reactstrap
import { Container, Row, Col } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from "../../redux/actionCreators";

class BookListContainer extends Component {

    renderList = () => {
      return this.props.books.map((book) => {
          return (
              <li onClick={() => this.props.selectBook(book)} key={book.title} className='list-group-item'> {book.title} </li>
          )
      });
    };

    render() {

        if(!this.props.books) {
            return <div>Loading...</div>
        }

        return (
            <Container fluid={true}>
                <Container>
                    <Row>
                        <Col xs='12' sm='12' md='12' lg='12'>
                            <ul className='list-group'>
                                { this.renderList() }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = (state) => { // values returned from here will show up as props of this component
    return {books: state.books};
};

const mapDispatchToProps = (dispatch) => { // bindActionCreators will make the payload flow through all components
    return bindActionCreators({selectBook: selectBook}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);