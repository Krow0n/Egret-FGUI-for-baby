class SimpleUI {
    private packageName = "First";

    private _view: fgui.GComponent;

    constructor() {
        fgui.UIPackage.addPackage(this.packageName);

        this._view = fgui.UIPackage.createObject(this.packageName, "Component1").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._view.getChild("n6").asCom.addClickListener(function () {
            new Suprisa();
        }, this);

    }

    destroy() {
        this._view.dispose();
    }
}