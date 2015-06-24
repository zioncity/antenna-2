天线姿态自动监测管理系统
=====
phrases
----

- Antenna attitude : 天线姿态
- Antena attitude monitor Sys : 天线姿态自动监测管理系统
- Azimuth : 方位角
- Inclination angle : 下倾角
- Pole dip: 抱杆倾角
- lower equipment: 通信下位机
- monitors : 监测子系统
- antennas monitor unit : 天线监测单元
- latitude and longitude : 经纬度
- altitude : 挂高, 海拔
- pitch angle : 俯仰角
- roll angle : 横滚角
- geographical location : 地理位置
- Orientation angle : 方向角

parameters
----

- Current : 工作电流 mA
- Voltage : 工作电压 V
- Temperature :  工作温度 ℃
- Humidity : 工作湿度范围
- Inclination angle resolution : 下倾角测量精度 °
- Inclination angle scopde : 下倾角测量范围 °
- roll angle resolution : 横滚角测量精度 °
- roll angle scope : 横滚角测量范围 °
- orientation angle resolution : 方向角测量精度 °
- orientation angle scope : 方向角测量范围 °
- waterproof grade : 防水等级
- overall dimensions : 外形尺寸 Mm
- gravity : 重量 G

antenna attitude msg format
----

- lower machine id
- monitor group id
- inclination angle
- orientation angle
- altitude
- ...

TODO
----
- 用户权限管理
  - 管理员密码
  - 权限
  - 角色
  - 用户管理
- 通信管理模块
- 数据统计功能
  - 网站统计
  - 网站日志
- 天线姿态监测管理
  - 天线姿态参数设置
  - 天线姿态查询
  - 告警信息查询
  - 即时上报姿态
- 监测子系统管理
  - 添加监测子系统
  - 批量添加监测子系统
  - 监测子系统查询
    - 编辑监测子系统
    - 删除监测子系统
  - 添加监测单元
  - 批量添加监测单元
  - 监测单元查询
    - 编辑监测单元
    - 删除监测单元
