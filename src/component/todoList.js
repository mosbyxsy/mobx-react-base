import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer, PropTypes as ObservablePropTypes} from 'mobx-react';
import TodoItem from "./todoItem";

@inject("store")
@observer
class TodoList extends Component {
    // 属性类型要在全局这里定义
    static propTypes = {
        store: PropTypes.shape({
            createTodo: PropTypes.func,
            todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired
        }).isRequired
    };

    state = {
        inputTile: ""
    };

    handleSubmit = (e) => {
        // 表单提交，阻止整个页面被提交
        e.preventDefault();
        let {store} = this.props;
        let {inputTile} = this.state;

        store.createTodo(inputTile);

        // 创建完新的条目之后，要清空输入框
        this.setState({
            inputTile: ""
        });
    };

    handleChange = (e) => {
        const inputTile = e.target.value;
        this.setState({
            inputTile
        });
    };

    render() {
        let {inputTile} = this.state;
        let {store} = this.props;
        return <div className="todoList">
            <header>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           onChange={this.handleChange}
                           value={inputTile}
                           placeholder="你想要到哪里去？"
                           className="input"
                    />
                </form>
            </header>
            <ul>
                {
                    store.todos.map((item) => {
                        return (
                            <li key={item.id}>
                                <TodoItem todo={item}/>
                                <span onClick={()=>{store.removeTode(item)}}>删除</span>
                            </li>
                        )
                    })
                }
            </ul>
            <footer>
                {store.left} 项 未完成
            </footer>
        </div>
    }
}

export default TodoList;