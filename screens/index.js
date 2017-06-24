import { Navigation } from 'react-native-navigation';
import Types from './Types';//Types
import Actions from './Actions';//Actions
import Transitions from './Transitions';//Transitions



export default function () {
    Navigation.registerComponent('example.Types', () => Types);
    Navigation.registerComponent('example.Actions', () => Actions);
    Navigation.registerComponent('example.Transitions', () => Transitions);
}