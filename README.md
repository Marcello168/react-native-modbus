
# react-native-modbus

## Getting started

`$ npm install react-native-modbus --save`

### Mostly automatic installation

`$ react-native link react-native-modbus`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-modbus` and add `RNModbus.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNModbus.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNModbusPackage;` to the imports at the top of the file
  - Add `new RNModbusPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-modbus'
  	project(':react-native-modbus').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-modbus/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-modbus')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNModbus.sln` in `node_modules/react-native-modbus/windows/RNModbus.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Modbus.RNModbus;` to the usings at the top of the file
  - Add `new RNModbusPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNModbus from 'react-native-modbus';

// TODO: What to do with the module?
RNModbus;
```
  