package com.tns.gen.com.telerik.widget.list;

public class SelectionBehavior_SelectionChangedListener implements com.telerik.widget.list.SelectionBehavior.SelectionChangedListener {
	public SelectionBehavior_SelectionChangedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onSelectionStarted()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onSelectionStarted", void.class, args);
	}

	public void onItemIsSelectedChanged(int param_0, boolean param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onItemIsSelectedChanged", void.class, args);
	}

	public void onSelectionEnded()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onSelectionEnded", void.class, args);
	}

}
