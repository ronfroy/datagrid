import { connect } from 'react-redux'
import {Grid} from '../Grid';
import {sort} from './actions';

const Container = connect(
    (state) => {
      return {
        data: state.data
      }
    },
    (dispatch) => {
      return {
        onSort: (fieldName) => {
          dispatch(sort(fieldName))
        },
      }
    }
)(Grid);

export default Container



