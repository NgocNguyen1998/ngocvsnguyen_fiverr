# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- ### realtime
B1: C??i ?????t signalR ( index js) npm i @aspnet/signalr
 import * as signalR from '@aspnet/signalr';

 export const connection = new signalR.HubConnectionBuilder().withUrl('https://movienew.cybersoft.edu.vn/DatVeHub').configureLogging(signalR.LogLevel.Information).build()

connection.start().then(function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(
      <React.StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
      </React.StrictMode>
   );

   reportWebVitals();
 }).catch(error=>{
   console.log("error: ", error);

 })


 B2: C??i ?????t h??m l???ng nghe s??? ki???n n??i c???n
 import { connection } from "../..";
   
useEffect(()=>{
    -v???a v??o trang load l??n lu??n gh?? ng kh??c ??ang ?????t
    connection.invoke('loadDanhSachGhe',maLichChieu)
 
   connection.on('load',(dsGheKhachDat)=>{
           console.log("dsGheKhachDat: ", dsGheKhachDat);
 
             dsGheKhachDat: laf m???ng be tr??? v??? m???ng kh??ch ??ang ?????t

       - lo???i m??nh ra kh???i danh s??ch
               dsGheKhachDat = dsGheKhachDat.filter(item=>item.taiKhoan !==userLogin.taiKhoan)

        - g???p danh s??ch gh??? kh??ch ?????t  ??? t???t c??? user th??nh 1 m???ng chung
           let arrGheKhachDat = dsGheKhachDat.reduce((result,item,index)=>{
            let arGhe = JSON.parse(item.danhSachGhe)
                return [...result,...arrGhe]

                    },[])
            arGhe = _.unigBy(arrGheKhachDat,'maGhe) - l???c k tr??ng nhau
        
        - dispatch(checkGhe(arrGheKhachDat)) => h??nh ?????ng trong effect g???i dispatch l??n store => store thay ?????i(datVeReducer) danhSachGheDangDat = arrGheKhachDat ( l?? action.payload)
                    })
      
}

 -cai d???t s??? ki???n reload trang ( trong useEffect)
            window.addEventListener('b???oeunload",)

      return ()=>{
      clearGhe();
      window.removeEventListener('b???oeunload',clearGhe)

 },[])useEffect

  ngo??i useEfect :
    const clearGhe = function(even){
       connection.invoke('huyDat',userLogin.taiKhoan.maLichChieu)
}



 B3: c??i ?????t n??t ?????t gh???=> g???i t??n hi???u ?????n server=> server ph??t t??n hi???u v??? cho t???t c??? client( ??? b?????c 2)

 - action: async (dispatch,getState)=>{
    await dispatch datGhe len reducer  
  call api v??? BE (QuanLyDatVeReducer.js file ) -l???y ????? data Be y??u c???u => d???a v??o getState
 + let dsGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat   //lay tu kho tong ve dua vao getState()
 + let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan   //lay tu kho tong ve dua vao getState()
 -call api signalr
 + connection.invok('datGhe',taiKhoan,danhSachGhe,maLichChieu)
 } 
 -->
