class Suprisa {
    private packageName = "Second";

    private _view: fgui.GComponent;

    constructor() {
        fgui.UIPackage.addPackage(this.packageName);

        this._view = fgui.UIPackage.createObject(this.packageName, "Component1").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        
        let that = this;
        this._view.getChild("n4").asCom.addClickListener(function () {
            that.destroy();
        }, this);
    }

    destroy() {
        this._view.dispose();
    }
}