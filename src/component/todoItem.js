import React, {Component} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

@observer
class TodoItem extends Component {
    // 从父组件传来的属性类型要在全局这里定义，做一些限制
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired
        }).isRequired
    };

    handleClick = (e) => {
        let {todo} = this.props;
        todo.toggle();
    }

    render() {
        // 这里的Item是一个对象
        let {todo} = this.props;
        return (
            <div>
                <input
                    type="checkbox"
                    checked={todo.finished}
                    onChange={this.handleClick}
                />
                <span className="title">{todo.title}</span>
            </div>
        )
    }
}

export default TodoItem;