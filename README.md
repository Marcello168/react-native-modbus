
# Android和硬件通信使用的Modbus库 react-native-modbus
## 原生库 使用的是 志勇大神封装的Modbus库 [项目地址]:[https://github.com/licheedev/Modbus4Android]

## 开始使用

`$ npm install react-native-modbus --save`

### 自动链接原生库

`$ react-native link react-native-modbus`

1. 在Android 目录下 的`build.gradle`文件里面的 `repositories`
   增加 `maven { url 'https://jitpack.io' }` 如下

   ```
    allprojects {
    repositories {
        mavenLocal()
        google()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
            }
      maven { url 'https://jitpack.io' }
      }
	}
   ```

  2. 在AndraidMainifest.xml 文件中 将  ` android:allowBackup="false"` 改成`android:allowBackup="true"`

  3. 注意这个库支持的`miniSDK` 是18


### 手动安装



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




## 使用方法如下 或者参考example里面的`app.js`文件
```javascript
import RNModbus from 'react-native-modbus';

// TODO: What to do with the module?
RNModbus;


/**
 * 打开串口
 * @param {*串口路径} path 
 * @param {*波特率} baudrate 
 * @param {* 成功或者失败回调} Callback 
 */
function openDevice(path, baudrate, Callback) {
    RNModbus.openDevice(path, baudrate, Callback)
}

/**
 * 写寄存器
 * @param {*从机地址} slaveId 
 * @param {*写入的地址} start 
 * @param {*写入的值} values 
 * @param {*写入成功或者失败回调} Callback 
 */
function writeRegisters(slaveId, start, values, Callback) {
    RNModbus.writeRegisters(slaveId, start, values, Callback)
}

/**
 * 写单个寄存器
 * @param {* 从机地址} slaveId 
 * @param {* 寄存器地址} start 
 * @param {* 写入的值} value 
 * @param {* 回调} Callback 
 */
function writeSingleRegister(slaveId, start, value, Callback) {
    RNModbus.writeRegisters(slaveId, start, value, Callback);
}

/**
 * 读寄存器数据
 * @param {*从机地址} slaveId 
 * @param {*读取的寄存器地址} start 
 * @param {*读取的长度} len 
 * @param {*读取的回调} Callback 
 */
function readHoldingRegisters(slaveId, start, len, Callback) {
    RNModbus.readHoldingRegisters(slaveId, start, len, Callback)
}


```
  