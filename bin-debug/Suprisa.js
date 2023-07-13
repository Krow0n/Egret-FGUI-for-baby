var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Suprisa = (function () {
    function Suprisa() {
        this.packageName = "Second";
        fgui.UIPackage.addPackage(this.packageName);
        this._view = fgui.UIPackage.createObject(this.packageName, "Component1").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        var that = this;
        this._view.getChild("n4").asCom.addClickListener(function () {
            that.destroy();
        }, this);
    }
    Suprisa.prototype.destroy = function () {
        this._view.dispose();
    };
    return Suprisa;
}());
__reflect(Suprisa.prototype, "Suprisa");
