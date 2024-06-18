
export function validate(e, form, setShowSection, showSection) {
    // validate AND update the value of the STATE variable
    let validated = true;
    
    // validate
    
    const field = e.target.id;
    const char = e.target.value[e.target.value.length - 1];
    console.log(field)

    if (field === "basic_Address") {

        if (!validated) {
            form.setFieldsValue({
                Address: e.target.value.slice(0, e.target.value.length - 1)
            })
        }
    }
    else if (field === "basic_Name") {
        if (!char?.match(/[a-zA-Z\s]/)) {
            validated = false;
        }

        


        if (!validated) {

            form.setFieldsValue({
                Name: e.target.value.slice(0, e.target.value.length - 1)
            })
        
        }
    }
    else if (field === "basic_Grade") {
        if (!char?.match(/\d/)) {
            validated = false;
        }
        let value = parseInt(e.target.value);
        
        if (parseInt(value) > 10) {
            validated = false;
        }
        

        // 
        if (!validated) {

            form.setFieldsValue({
                Grade: e.target.value.slice(0, e.target.value.length - 1)
            })
            value = parseInt(e.target.value.slice(0, e.target.value.length - 1))
        
        }
        console.log(value)
        if (value >=5 ) {
            setShowSection(false)
            console.log(showSection)
        } else {
            setShowSection(true)
            console.log(showSection)
        }
    }
    else if (field === "basic_Section") {

        if (!validated) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
            form.setFieldsValue({
                Section: e.target.value.slice(0, e.target.value.length - 1)
            })
        }
    }
    
}