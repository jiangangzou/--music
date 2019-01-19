import React, { component } from 'react';
import PropTypes from 'prop-types';

const viewDecorator = WrappedComponent => {
    class viewDecorator extends Component {
        static propTypes = {
            fetchByParams: PropTypes.func.isRequired,
            params: PropTypes.object.isRequired
        }
        static defaultProps = {
            params: {}
        }
        constructor(props) {
            super(props);
            this.props.fetchByParams(this.props.params)
        }
        componentWillReceiveProps = (nextProps) => {
            if(this.doesParaChange(this.props,nextProps)) {
                this.props.fetchByParams(nextProps.params || {})
            }
        }

        doesParaChange(prevProps,nextProps) {
            let prevParams = prevProps.params || {}
            let nextParams = nextProps.params || {}

            if(Object.keys(prevParams).length !== Object.keys(nextParams).length  ) {
                return true;
            }
            return !Object.keys(prevParams).every((key) => {
                return nextParams.hasOwnProperty(key) && prevParams[key] === nextParams[key]
              })
            }
        
            render() {
              return (
                <React.Fragment>
                  <WrappedComponent
                    {...this.props}
                  />
                  {
                    // render 'render props' if provided
                    this.props.render ? this.props.render(this.props.payload) : null
                  }
                </React.Fragment>
              )
            }
          }
          return ViewDecorator
        }
        
        export default viewDecorator