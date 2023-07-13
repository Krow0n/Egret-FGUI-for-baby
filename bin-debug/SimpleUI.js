var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SimpleUI = (function () {
    function SimpleUI() {
        this.packageName = "First";
        fgui.UIPackage.addPackage(this.packageName);
        this._view = fgui.UIPackage.createObject(this.packageName, "Component1").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._view.getChild("n6").asCom.addClickListener(function () {
            new Suprisa();
        }, this);
    }
    SimpleUI.prototype.destroy = function () {
        this._view.dispose();
    };
    return SimpleUI;
}());
__reflect(SimpleUI.prototype, "SimpleUI");
