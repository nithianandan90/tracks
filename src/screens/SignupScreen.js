import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErroressage, tryLocalSignin} = useContext(AuthContext);
    
    

    return( 
    <View style = {styles.container}> 
        <NavigationEvents
            onWillFocus={clearErroressage}
        />
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText=" Sign Up"
            onSubmit={signup}
        />
      <NavLink
        
        routeName = "Signin"
        text = "Already have an account? Sign In"
      />
    </View>);
};


SignupScreen.navigationOptions = ()=>{

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

export default SignupScreen;