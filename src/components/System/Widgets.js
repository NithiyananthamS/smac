import Button  from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const Widgets = () => {
    return <h1> Widgets </h1>
}

const SmacButton = withStyles({
    root: {
      background: 'rgb(245,245,245)',
      borderRadius: 8,
      border: 0,
      color: 'rgb(104,104,104)',
      height: 50,
      padding: '0 30px',
      boxShadow: '0 0 5px 5px rgb(200,200,200)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

export default Widgets;
export { SmacButton };