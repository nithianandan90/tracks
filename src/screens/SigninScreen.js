import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { navigate } from '../navigationRef';


const SigninScreen = () => {
    
    const {state,signin, clearErroressage} = useContext(Context);
    
    return (
        <View style = {styles.container}> 
        <NavigationEvents
            onWillFocus={clearErroressage} 
        />
        <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            submitButtonText=" Sign In"
            onSubmit={signin}
        />
      <NavLink
        routeName = "Signup"
        text = "Dont have an account? Sign up instead"
      />
    </View> 
    );
};


SigninScreen.navigationOptions = ()=>{

    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    
    container:{

        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }

});

export default SigninScreen;