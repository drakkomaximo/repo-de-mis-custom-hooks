# useCustomForm

example:
    const initialForm = {
        name:'',
        age:0,
        email:''
    }

...
    const [ formValues, handleInputChange, reset ] = useCustomForm( initialForm )
...

initialForm is a default custom object, it's necessary.