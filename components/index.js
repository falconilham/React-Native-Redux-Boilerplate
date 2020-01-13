import React from 'react';
import {View, Text, TextInput} from 'react-native';

function FormUI(props){
    return(
        <View>
            {props.data.map((item, i) => {
                return(
                    <React.Fragment key={i}>
                        {item.fieldname === "Username" && (
                            <TextInput 
                                placeholder={item.fieldname}
                                onChange={(value) => props.changeState(value, fieldname)}
                                value={props.UserState}
                            />
                        )}
                        {item.fieldname === "Password" && (
                            <TextInput
                                placeholder={item.fieldname}
                                onChange={(value) => props.changeState(value, fieldname)}
                                secureTextEntry
                                value={props.PassState}
                            />
                        )}
                    </React.Fragment>
                )
            })}
        </View>
    )
}

export default FormUI;