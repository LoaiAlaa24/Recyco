/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import welcomePage from "./js/components/WelcomePage";
import loginPage from "./js/components/LoginPage";
import registerPage from "./js/components/Register";
import bookingPage from "./js/components/Booking";
import mainDashboard from "./js/components/MainDashboard";
import userProfile from "./js/components/MainDashboard";
import checkRecyc from "./js/components/checkRecyc";
import redemPoints from "./js/components/redemPoints";
import challenges from "./js/components/Challenges";
import leaderboard from "./js/components/subComponents/leaderboardTable";
import profile from "./js/components/UserProfile";
import Appointments from "./js/components/Appointments";
import AppointmentsAdmin from "./js/components/AppointmentsAdmin";

const AppNavigator = createStackNavigator({
  welcomePage: { screen: welcomePage },
  loginPage: {screen: loginPage},
  registerPage: {screen: registerPage},
  bookingPage: {screen: bookingPage},
  mainDashboard:{screen:mainDashboard},
  userProfile: {screen:userProfile},
  checkRecyc: {screen:checkRecyc},
  redemPoints: {screen:redemPoints},
  challenges: challenges,
  leaderboard: leaderboard,
  profile:profile,
  Appointments: Appointments,
  AppointmentsAdmin: AppointmentsAdmin
});

const App = createAppContainer(AppNavigator)

export default App
