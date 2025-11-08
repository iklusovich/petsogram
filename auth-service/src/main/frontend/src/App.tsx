import React, {useState} from 'react';
import './App.css';
import {Form} from "./components/Form";
import {FormType} from "./components/Form/IFormProps";

function App() {

    const [formType, setFormType] = useState<FormType>(FormType.LOGIN);

    const changeFormTypeHandler = (formType: FormType = FormType.LOGIN) => {
        setFormType(formType);
    }

    return (
        <div className="app">
                <Form
                    type={formType}
                    setFormType={changeFormTypeHandler}
                />
        </div>
    );
}

export default App;
