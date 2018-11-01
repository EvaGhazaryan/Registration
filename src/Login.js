import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import data from './data';

const FormItem = Form.Item;


class Login extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            inputLinkClicked: null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(!data.find((e) => e.name === values.userName)) {
                    this.setState({
                        inputLinkClicked: true
                    })
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

            return (
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                    {
                        this.state.inputLinkClicked ? <div>This user name doesn't exist</div> : <div></div>
                    }
                </Form>
            );
    }
}


export default Form.create()(Login);
