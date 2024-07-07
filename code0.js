gdjs.StartUpUICode = {};
gdjs.StartUpUICode.localVariables = [];
gdjs.StartUpUICode.GDDefaultPanel27Objects1= [];
gdjs.StartUpUICode.GDDefaultPanel27Objects2= [];
gdjs.StartUpUICode.GDStartButtonObjects1= [];
gdjs.StartUpUICode.GDStartButtonObjects2= [];
gdjs.StartUpUICode.GDMultiplayerObjects1= [];
gdjs.StartUpUICode.GDMultiplayerObjects2= [];
gdjs.StartUpUICode.GDStartTextObjects1= [];
gdjs.StartUpUICode.GDStartTextObjects2= [];
gdjs.StartUpUICode.GDMultiplayerTextObjects1= [];
gdjs.StartUpUICode.GDMultiplayerTextObjects2= [];
gdjs.StartUpUICode.GDNewTextObjects1= [];
gdjs.StartUpUICode.GDNewTextObjects2= [];
gdjs.StartUpUICode.GDBestWaveTextObjects1= [];
gdjs.StartUpUICode.GDBestWaveTextObjects2= [];


gdjs.StartUpUICode.mapOfGDgdjs_9546StartUpUICode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.StartUpUICode.GDNewTextObjects1});
gdjs.StartUpUICode.asyncCallback15091148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartUpUICode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.StartUpUICode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.StartUpUICode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.StartUpUICode.GDNewTextObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.StartUpUICode.localVariables.length = 0;
}
gdjs.StartUpUICode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartUpUICode.localVariables);
for (const obj of gdjs.StartUpUICode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.StartUpUICode.asyncCallback15091148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartUpUICode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartUpUICode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.StartUpUICode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartUpUICode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartUpUICode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartUpUICode.GDStartButtonObjects1[k] = gdjs.StartUpUICode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.StartUpUICode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartUpUICode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.StartUpUICode.GDStartTextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartUpUICode.GDStartTextObjects1[k] = gdjs.StartUpUICode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.StartUpUICode.GDStartTextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.StartUpUICode.GDMultiplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MultiplayerText"), gdjs.StartUpUICode.GDMultiplayerTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartUpUICode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.StartUpUICode.GDMultiplayerObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartUpUICode.GDMultiplayerObjects1[k] = gdjs.StartUpUICode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.StartUpUICode.GDMultiplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartUpUICode.GDMultiplayerTextObjects1.length;i<l;++i) {
    if ( gdjs.StartUpUICode.GDMultiplayerTextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartUpUICode.GDMultiplayerTextObjects1[k] = gdjs.StartUpUICode.GDMultiplayerTextObjects1[i];
        ++k;
    }
}
gdjs.StartUpUICode.GDMultiplayerTextObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.StartUpUICode.GDNewTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartUpUICode.mapOfGDgdjs_9546StartUpUICode_9546GDNewTextObjects1Objects, 283, 435, "");
}
{ //Subevents
gdjs.StartUpUICode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BestWaveText"), gdjs.StartUpUICode.GDBestWaveTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartUpUICode.GDBestWaveTextObjects1.length;i<l;++i) {
    if ( gdjs.StartUpUICode.GDBestWaveTextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartUpUICode.GDBestWaveTextObjects1[k] = gdjs.StartUpUICode.GDBestWaveTextObjects1[i];
        ++k;
    }
}
gdjs.StartUpUICode.GDBestWaveTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c90036d6-8750-45d3-b0a4-32d3f99db23d", true);
}}

}


};

gdjs.StartUpUICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartUpUICode.GDDefaultPanel27Objects1.length = 0;
gdjs.StartUpUICode.GDDefaultPanel27Objects2.length = 0;
gdjs.StartUpUICode.GDStartButtonObjects1.length = 0;
gdjs.StartUpUICode.GDStartButtonObjects2.length = 0;
gdjs.StartUpUICode.GDMultiplayerObjects1.length = 0;
gdjs.StartUpUICode.GDMultiplayerObjects2.length = 0;
gdjs.StartUpUICode.GDStartTextObjects1.length = 0;
gdjs.StartUpUICode.GDStartTextObjects2.length = 0;
gdjs.StartUpUICode.GDMultiplayerTextObjects1.length = 0;
gdjs.StartUpUICode.GDMultiplayerTextObjects2.length = 0;
gdjs.StartUpUICode.GDNewTextObjects1.length = 0;
gdjs.StartUpUICode.GDNewTextObjects2.length = 0;
gdjs.StartUpUICode.GDBestWaveTextObjects1.length = 0;
gdjs.StartUpUICode.GDBestWaveTextObjects2.length = 0;

gdjs.StartUpUICode.eventsList1(runtimeScene);

return;

}

gdjs['StartUpUICode'] = gdjs.StartUpUICode;
