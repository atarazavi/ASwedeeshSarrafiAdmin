// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';
import ImageCropper from 'Routes/image-cropper';
import VideoPlayer from 'Routes/video-player';
import Dropzone from 'Routes/dropzone';

// STIB
import addNewRequest from 'Routes/addNewRequest';
import RequestsList from 'Routes/RequestsList';
import requestMoreInfo from 'Routes/requestMoreInfo';
import balanceHistory from 'Routes/balanceHistory';
import increaseBalance from 'Routes/increaseBalance';
import setTodaysRates from 'Routes/setTodaysRates';



// async component
import {
	AsyncAboutUsComponent,
	AsyncChatComponent,
	AsyncMailComponent,
	AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [
	{
		path: 'dashboard',
		component: Dashboard
	},
	{
		path: 'widgets',
		component: Widgets
	},
	{
		path: 'ecommerce',
		component: Ecommerce
	},
	{
		path: 'icons',
		component: Icons
	},
	{
		path: 'about-us',
		component: AsyncAboutUsComponent
	},
	{
		path: 'pages',
		component: Pages
	},
	{
		path: 'chat',
		component: AsyncChatComponent
	},
	{
		path: 'mail',
		component: AsyncMailComponent
	},
	{
		path: 'todo',
		component: AsyncTodoComponent
	},
	{
		path: 'charts',
		component: ChartsComponents
	},
	{
		path: 'tables',
		component: Tables
	},
	{
		path: 'maps',
		component: Maps
	},
	{
		path: 'users',
		component: Users
	},
	{
		path: 'ui-components',
		component: Components
	},
	{
		path: 'advanced-component',
		component: AdvanceUIComponents
	},
	{
		path: 'drag-andDrop',
		component: DragAndDrop
	},
	{
		path: 'forms',
		component: FormElements
	},
	{
		path: 'editor',
		component: Editor
	},
	{
		path: 'calendar',
		component: CalendarComponents
	},
	{
		path: 'image-cropper',
		component: ImageCropper
	},
	{
		path: 'video-player',
		component: VideoPlayer
	},
	{
		path: 'dropzone',
		component: Dropzone
	},
	//STIB
	{
		path: 'addNewRequest',
		component: addNewRequest
	},
	{
		path: 'RequestsList',
		component: RequestsList
	},
	{
		path: 'requestMoreInfo',
		component: requestMoreInfo
	},
	{
		path: 'balanceHistory',
		component: balanceHistory
	},
	{
		path: 'increaseBalance',
		component: increaseBalance
	},
	{
		path: 'setTodaysRates',
		component: setTodaysRates
	}
	
]