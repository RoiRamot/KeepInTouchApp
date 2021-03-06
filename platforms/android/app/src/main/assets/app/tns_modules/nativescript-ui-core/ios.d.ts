
declare class ImageEffects extends NSObject {

	static alloc(): ImageEffects; // inherited from NSObject

	static arrowImageWithSizeInsetsWidthColorLeftDirection(size: CGSize, insets: UIEdgeInsets, width: number, strokeColor: UIColor, isLeft: boolean): UIImage;

	static drawArrowInContextSizeInsetsWidthColorLeftDirection(context: any, size: CGSize, insets: UIEdgeInsets, width: number, strokeColor: UIColor, isLeft: boolean): void;

	static drawArrowInContextSizeInsetsWidthStrokeColorFillColorTopDirection(context: any, size: CGSize, insets: UIEdgeInsets, width: number, strokeColor: UIColor, fillColor: UIColor, isTop: boolean): void;

	static new(): ImageEffects; // inherited from NSObject

	static takeScreenshot(view: UIView): UIImage;

	constructor(o: { image: UIImage; });

	applyBlurWithRadiusTintColorSaturationDeltaFactorMaskImage(blurRadius: number, tintColor: UIColor, saturationDeltaFactor: number, maskImage: UIImage): UIImage;

	applyDarkEffect(): UIImage;

	applyExtraLightEffect(): UIImage;

	applyLightEffect(): UIImage;

	applyTintEffectWithColor(tintColor: UIColor): UIImage;

	initWithImage(image: UIImage): this;
}

declare class TKBalloonShape extends TKShape {

	static alloc(): TKBalloonShape; // inherited from NSObject

	static new(): TKBalloonShape; // inherited from NSObject

	arrowOffset: number;

	arrowPosition: TKBalloonShapeArrowPosition;

	arrowSize: CGSize;

	cornerRadius: number;

	useStrictArrowPosition: boolean;

	constructor(o: { arrowPosition: TKBalloonShapeArrowPosition; size: CGSize; });

	initWithArrowPositionSize(arrowPosition: TKBalloonShapeArrowPosition, size: CGSize): this;
}

declare const enum TKBalloonShapeArrowPosition {

	None = 0,

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4,

	LeftTop = 5,

	LeftBottom = 6,

	RightTop = 7,

	RightBottom = 8,

	TopLeft = 9,

	TopRight = 10,

	BottomLeft = 11,

	BottomRight = 12
}

declare class TKBasicAnimation extends CABasicAnimation {

	static alloc(): TKBasicAnimation; // inherited from NSObject

	static animation(): TKBasicAnimation; // inherited from CAAnimation

	static animationWithKeyPath(path: string): TKBasicAnimation; // inherited from CAPropertyAnimation

	static new(): TKBasicAnimation; // inherited from NSObject

	metadata: any;
}

declare class TKCheckShape extends TKShape {

	static alloc(): TKCheckShape; // inherited from NSObject

	static new(): TKCheckShape; // inherited from NSObject
}

declare class TKCheckView extends TKView {

	static alloc(): TKCheckView; // inherited from NSObject

	static appearance(): TKCheckView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCheckView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCheckView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCheckView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCheckView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCheckView; // inherited from UIAppearance

	static new(): TKCheckView; // inherited from NSObject

	checkFill: TKFill;

	checkShape: TKShape;

	checkStroke: TKStroke;

	isChecked: boolean;
}

interface TKCoreLayout extends NSObjectProtocol {

	alignmentMode?: TKCoreLayoutAlignmentMode;

	desiredSize: CGSize;

	stretchMode?: TKCoreLayoutStretchMode;

	arrange(rect: CGRect): void;

	itemWasAddedInLayout?(layout: TKCoreLayout): void;

	itemWasRemoved?(): void;

	measure(size: CGSize): CGSize;
}
declare var TKCoreLayout: {

	prototype: TKCoreLayout;
};

declare const enum TKCoreLayoutAlignmentMode {

	Left = 1,

	Top = 2,

	Right = 4,

	Bottom = 8,

	HorizontalCenter = 16,

	VerticalCenter = 32
}

declare class TKCoreLayoutItem extends NSObject implements TKCoreLayout {

	static alloc(): TKCoreLayoutItem; // inherited from NSObject

	static new(): TKCoreLayoutItem; // inherited from NSObject

	readonly content: any;

	margin: UIEdgeInsets;

	sizingMode: TKCoreLayoutSizingMode;

	alignmentMode: TKCoreLayoutAlignmentMode; // inherited from TKCoreLayout

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly desiredSize: CGSize; // inherited from TKCoreLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	stretchMode: TKCoreLayoutStretchMode; // inherited from TKCoreLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { layer: CALayer; });

	constructor(o: { layout: TKCoreLayout; });

	constructor(o: { view: UIView; });

	arrange(rect: CGRect): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLayer(aLayer: CALayer): this;

	initWithLayout(aLayout: TKCoreLayout): this;

	initWithView(aView: UIView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	itemWasAddedInLayout(layout: TKCoreLayout): void;

	itemWasRemoved(): void;

	measure(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TKCoreLayoutSizingMode {

	Fixed = 0,

	Fit = 1
}

declare const enum TKCoreLayoutStretchMode {

	None = 0,

	Horizontal = 1,

	Vertical = 2
}

declare class TKCoreStackLayout extends NSObject implements NSFastEnumeration, TKCoreLayout {

	static alloc(): TKCoreStackLayout; // inherited from NSObject

	static new(): TKCoreStackLayout; // inherited from NSObject

	readonly count: number;

	itemOrder: TKCoreStackLayoutItemOrder;

	itemSpacing: number;

	readonly items: NSArray<any>;

	orientation: TKCoreStackLayoutOrientation;

	alignmentMode: TKCoreLayoutAlignmentMode; // inherited from TKCoreLayout

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly desiredSize: CGSize; // inherited from TKCoreLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	stretchMode: TKCoreLayoutStretchMode; // inherited from TKCoreLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[Symbol.iterator](): Iterator<any>;

	addItem(item: TKCoreLayout): boolean;

	arrange(rect: CGRect): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexOfItem(layoutItem: TKCoreLayout): number;

	insertItemAtIndex(item: TKCoreLayout, index: number): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	itemAtIndex(index: number): TKCoreLayout;

	itemWasAddedInLayout(layout: TKCoreLayout): void;

	itemWasRemoved(): void;

	lastItem(): TKCoreLayout;

	measure(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllItems(): void;

	removeItem(item: TKCoreLayout): boolean;

	removeItemAtIndex(index: number): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TKCoreStackLayoutItemOrder {

	Normal = 0,

	Reverse = 1
}

declare const enum TKCoreStackLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class TKCoreStackLayoutView extends UIScrollView {

	static alloc(): TKCoreStackLayoutView; // inherited from NSObject

	static appearance(): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKCoreStackLayoutView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKCoreStackLayoutView; // inherited from UIAppearance

	static new(): TKCoreStackLayoutView; // inherited from NSObject

	stack: TKCoreStackLayout;
}

declare class TKDateRange extends NSObject {

	static alloc(): TKDateRange; // inherited from NSObject

	static new(): TKDateRange; // inherited from NSObject

	endDate: Date;

	readonly isNormalized: boolean;

	startDate: Date;

	constructor(o: { start: Date; end: Date; });

	containsDate(date: Date): boolean;

	initWithStartEnd(startDate: Date, endDate: Date): this;

	normalize(): void;
}

declare class TKDemoAlert extends NSObject implements UIAlertViewDelegate {

	static addDemoFrame(view: UIView, frame: CGRect): UILabel;

	static alloc(): TKDemoAlert; // inherited from NSObject

	static new(): TKDemoAlert; // inherited from NSObject

	static sharedInstance(): TKDemoAlert;

	static updateAlertFrame(view: UIView, frame: CGRect): void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	alertViewCancel(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentAlertView(alertView: UIAlertView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPresentAlertView(alertView: UIAlertView): void;
}

interface TKDrawing extends NSObjectProtocol {

	insets?: UIEdgeInsets;

	drawInContextWithPath(context: any, path: any): void;

	drawInContextWithRect(context: any, rect: CGRect): void;
}
declare var TKDrawing: {

	prototype: TKDrawing;
};

declare class TKFill extends NSObject implements NSCopying, TKDrawing {

	static alloc(): TKFill; // inherited from NSObject

	static new(): TKFill; // inherited from NSObject

	alpha: number;

	cornerRadius: number;

	corners: UIRectCorner;

	shadowBlur: number;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	insets: UIEdgeInsets; // inherited from TKDrawing

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	drawFillInContextWithPath(context: any, path: any): void;

	drawFillInContextWithRect(context: any, rect: CGRect): void;

	drawInContextWithPath(context: any, path: any): void;

	drawInContextWithRect(context: any, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKGradientFill extends TKFill {

	static alloc(): TKGradientFill; // inherited from NSObject

	static new(): TKGradientFill; // inherited from NSObject

	colors: NSArray<UIColor>;

	locations: NSArray<number>;

	constructor(o: { colors: NSArray<any>; });

	constructor(o: { colors: NSArray<any>; cornerRadius: number; });

	constructor(o: { colors: NSArray<any>; locations: NSArray<any>; });

	constructor(o: { colors: NSArray<any>; locations: NSArray<any>; cornerRadius: number; });

	initWithColors(colors: NSArray<any>): this;

	initWithColorsCornerRadius(colors: NSArray<any>, cornerRadius: number): this;

	initWithColorsLocations(colors: NSArray<any>, locations: NSArray<any>): this;

	initWithColorsLocationsCornerRadius(colors: NSArray<any>, locations: NSArray<any>, cornerRadius: number): this;
}

declare const enum TKGradientRadiusType {

	Pixels = 0,

	RectMin = 1,

	RectMax = 2
}

declare class TKGridLayout extends NSObject implements TKLayout {

	static alloc(): TKGridLayout; // inherited from NSObject

	static new(): TKGridLayout; // inherited from NSObject

	readonly arrangedViews: NSArray<any>;

	readonly definitions: NSArray<any>;

	horizontalSpacing: number;

	minColumnsWidth: number;

	minRowsHeight: number;

	verticalSpacing: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	frame: CGRect; // inherited from TKLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	orientation: TKLayoutOrientation; // inherited from TKLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; });

	addArrangedView(view: UIView): void;

	addDefinition(definition: TKGridLayoutCellDefinition): void;

	addDefinitionForViewAtRowColumnRowSpanColumnSpan(view: UIView, row: number, column: number, rowSpan: number, columnSpan: number): TKGridLayoutCellDefinition;

	arrangeViewWithLayoutInfo(view: UIView, layoutInfo: TKLayoutInfo): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	definitionForView(view: UIView): TKGridLayoutCellDefinition;

	initWithFrame(frame: CGRect): this;

	insertArrangedViewAtIndex(view: UIView, index: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutArrangedViews(): void;

	measurePreferredSizeThatFitsSize(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllArrangedViews(): void;

	removeAllDefinitions(): void;

	removeArrangedView(view: UIView): void;

	removeDefinition(definition: TKGridLayoutCellDefinition): void;

	resetHeightForRow(row: number): void;

	resetWidthForColumn(col: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setHeightForRow(height: number, row: number): void;

	setWidthForColumn(width: number, col: number): void;
}

declare const enum TKGridLayoutAlignment {

	Top = 1,

	Left = 2,

	Bottom = 4,

	Right = 8,

	Center = 16,

	CenterVertical = 32,

	CenterHorizontal = 64,

	Fill = 128,

	FillVertical = 256,

	FillHorizontal = 512
}

declare class TKGridLayoutCell extends NSObject {

	static alloc(): TKGridLayoutCell; // inherited from NSObject

	static new(): TKGridLayoutCell; // inherited from NSObject

	col: number;

	definition: TKGridLayoutCellDefinition;

	isUsed: boolean;

	row: number;

	size: CGSize;

	constructor(o: { row: number; col: number; });

	initWithRowCol(row: number, col: number): this;
}

declare class TKGridLayoutCellDefinition extends NSObject {

	static alloc(): TKGridLayoutCellDefinition; // inherited from NSObject

	static new(): TKGridLayoutCellDefinition; // inherited from NSObject

	alignment: TKGridLayoutAlignment;

	column: number;

	columnSpan: number;

	contentOffset: UIOffset;

	index: number;

	row: number;

	rowSpan: number;

	view: UIView;

	constructor(o: { view: UIView; });

	constructor(o: { view: UIView; atRow: number; column: number; });

	constructor(o: { view: UIView; atRow: number; column: number; rowSpan: number; columnSpan: number; });

	initWithView(view: UIView): this;

	initWithViewAtRowColumn(view: UIView, row: number, col: number): this;

	initWithViewAtRowColumnRowSpanColumnSpan(view: UIView, row: number, col: number, rowSpan: number, colSpan: number): this;
}

declare class TKImageFill extends TKFill {

	static alloc(): TKImageFill; // inherited from NSObject

	static imageFillWithImage(image: UIImage): TKImageFill;

	static imageFillWithImageCornerRadius(image: UIImage, cornerRadius: number): TKImageFill;

	static new(): TKImageFill; // inherited from NSObject

	image: UIImage;

	resizingMode: TKImageFillResizingMode;

	constructor(o: { image: UIImage; });

	constructor(o: { image: UIImage; cornerRadius: number; });

	initWithImage(image: UIImage): this;

	initWithImageCornerRadius(image: UIImage, cornerRadius: number): this;
}

declare const enum TKImageFillResizingMode {

	Tile = 0,

	Stretch = 1,

	None = 2
}

declare class TKLayer extends CALayer {

	static alloc(): TKLayer; // inherited from NSObject

	static layer(): TKLayer; // inherited from CALayer

	static new(): TKLayer; // inherited from NSObject

	fill: TKFill;

	shape: TKShape;

	stroke: TKStroke;

	sizeThatFits(size: CGSize): CGSize;

	sizeToFit(): void;
}

interface TKLayout extends NSObjectProtocol {

	arrangedViews: NSArray<any>;

	frame: CGRect;

	orientation: TKLayoutOrientation;

	addArrangedView(view: UIView): void;

	arrangeViewWithLayoutInfo(view: UIView, layoutInfo: TKLayoutInfo): void;

	insertArrangedViewAtIndex(view: UIView, index: number): void;

	layoutArrangedViews(): void;

	measurePreferredSizeThatFitsSize(size: CGSize): CGSize;

	removeAllArrangedViews(): void;

	removeArrangedView(view: UIView): void;
}
declare var TKLayout: {

	prototype: TKLayout;
};

declare class TKLayoutInfo extends NSObject {

	static alloc(): TKLayoutInfo; // inherited from NSObject

	static new(): TKLayoutInfo; // inherited from NSObject

	column: number;

	columnSpan: number;

	index: number;

	row: number;

	rowSpan: number;

	constructor(o: { row: number; column: number; rowSpan: number; columnSpan: number; });

	initWithRowColumnRowSpanColumnSpan(row: number, column: number, rowSpan: number, columnSpan: number): this;
}

declare const enum TKLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class TKLinearGradientFill extends TKGradientFill {

	static alloc(): TKLinearGradientFill; // inherited from NSObject

	static linearGradientFillWithColors(colors: NSArray<any>): TKLinearGradientFill;

	static linearGradientFillWithColorsLocationsStartPointEndPoint(colors: NSArray<any>, locations: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): TKLinearGradientFill;

	static linearGradientFillWithColorsStartPointEndPoint(colors: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): TKLinearGradientFill;

	static new(): TKLinearGradientFill; // inherited from NSObject

	static reverse(fill: TKLinearGradientFill): TKLinearGradientFill;

	endPoint: CGPoint;

	startPoint: CGPoint;

	constructor(o: { colors: NSArray<any>; locations: NSArray<any>; startPoint: CGPoint; endPoint: CGPoint; });

	constructor(o: { colors: NSArray<any>; startPoint: CGPoint; endPoint: CGPoint; });

	initWithColorsLocationsStartPointEndPoint(colors: NSArray<any>, locations: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): this;

	initWithColorsStartPointEndPoint(colors: NSArray<any>, startPoint: CGPoint, endPoint: CGPoint): this;
}

declare class TKMutableArray extends NSObject implements NSFastEnumeration {

	static alloc(): TKMutableArray; // inherited from NSObject

	static new(): TKMutableArray; // inherited from NSObject

	readonly array: NSArray<any>;
	[index: number]: any;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { array: NSArray<any>; });

	addObject(object: any): void;

	count(): number;

	firstObject(): any;

	initWithArray(array: NSArray<any>): this;

	lastObject(): any;

	objectAtIndex(index: number): any;

	objectAtIndexedSubscript(idx: number): any;

	removeObject(object: any): void;

	removeObjectAtIndex(index: number): void;

	setObjectAtIndexedSubscript(obj: any, idx: number): void;
}

declare class TKObservableArray extends NSObject implements NSFastEnumeration {

	static alloc(): TKObservableArray; // inherited from NSObject

	static new(): TKObservableArray; // inherited from NSObject

	readonly array: NSArray<any>;

	readonly count: number;

	delegate: TKObservableArrayDelegate;
	[index: number]: any;
	[Symbol.iterator](): Iterator<any>;

	addObject(object: any): void;

	containsObject(object: any): boolean;

	indexOfObject(object: any): number;

	objectAtIndex(index: number): any;

	objectAtIndexedSubscript(idx: number): any;

	removeObject(object: any): void;

	removeObjectAtIndex(index: number): void;

	setObjectAtIndexedSubscript(obj: any, idx: number): void;
}

interface TKObservableArrayDelegate extends NSObjectProtocol {

	didAddObjectAtIndex?(object: any, index: number): void;

	didRemoveObjectAtIndex?(object: any, index: number): void;

	didSetObjectAtIndexOfOldObject?(object: any, index: number, oldObject: any): void;
}
declare var TKObservableArrayDelegate: {

	prototype: TKObservableArrayDelegate;
};

declare class TKPredefinedShape extends TKShape {

	static alloc(): TKPredefinedShape; // inherited from NSObject

	static new(): TKPredefinedShape; // inherited from NSObject

	static shapeWithTypeAndSize(type: TKShapeType, size: CGSize): TKPredefinedShape;

	readonly type: TKShapeType;

	constructor(o: { type: TKShapeType; andSize: CGSize; });

	initWithTypeAndSize(type: TKShapeType, size: CGSize): this;
}

declare class TKRadialGradientFill extends TKGradientFill {

	static alloc(): TKRadialGradientFill; // inherited from NSObject

	static new(): TKRadialGradientFill; // inherited from NSObject

	static radialGradientFillWithColors(colors: NSArray<any>): TKRadialGradientFill;

	static reverse(fill: TKRadialGradientFill): TKRadialGradientFill;

	endCenter: CGPoint;

	endRadius: number;

	gradientRadiusType: TKGradientRadiusType;

	startCenter: CGPoint;

	startRadius: number;

	constructor(o: { colors: NSArray<any>; startCenter: CGPoint; startRadius: number; endCenter: CGPoint; endRadius: number; });

	constructor(o: { colors: NSArray<any>; startCenter: CGPoint; startRadius: number; endCenter: CGPoint; endRadius: number; radiusType: TKGradientRadiusType; });

	initWithColorsStartCenterStartRadiusEndCenterEndRadius(colors: NSArray<any>, startCenter: CGPoint, startRadius: number, endCenter: CGPoint, endRadius: number): this;

	initWithColorsStartCenterStartRadiusEndCenterEndRadiusRadiusType(colors: NSArray<any>, startCenter: CGPoint, startRadius: number, endCenter: CGPoint, endRadius: number, radiusType: TKGradientRadiusType): this;
}

declare class TKRange extends NSObject {

	static alloc(): TKRange; // inherited from NSObject

	static new(): TKRange; // inherited from NSObject

	static rangeWithMinimumAndMaximum(minimum: any, maximum: any): TKRange;

	static rangeWithMinimumIndexAndMaximumIndex(minimumIndex: number, maximumIndex: number): TKRange;

	maximum: any;

	minimum: any;

	constructor(o: { minimum: any; andMaximum: any; });

	initWithMinimumAndMaximum(minimum: any, maximum: any): this;

	setMinimumAndMaximum(minimum: any, maximum: any): void;

	setMinimumAndMaximumCalcWithCurrent(minimum: any, maximum: any, includeCurrentRange: boolean): void;
}

declare const enum TKRectSide {

	Top = 1,

	Bottom = 2,

	Left = 4,

	Right = 8,

	All = -1
}

declare class TKShape extends NSObject {

	static alloc(): TKShape; // inherited from NSObject

	static new(): TKShape; // inherited from NSObject

	readonly insets: UIEdgeInsets;

	size: CGSize;

	constructor(o: { size: CGSize; });

	drawInContextWithCenterDrawings(context: any, center: CGPoint, drawings: NSArray<any>): void;

	drawInContextWithCenterDrawingsScale(context: any, center: CGPoint, drawings: NSArray<any>, scale: number): void;

	initWithSize(size: CGSize): this;
}

declare const enum TKShapeType {

	None = 0,

	Square = 1,

	Circle = 2,

	TriangleUp = 3,

	TriangleDown = 4,

	Rhombus = 5,

	Pentagon = 6,

	Hexagon = 7,

	Star = 8,

	Heart = 9
}

declare class TKSolidFill extends TKFill {

	static alloc(): TKSolidFill; // inherited from NSObject

	static new(): TKSolidFill; // inherited from NSObject

	static solidFillWithColor(color: UIColor): TKSolidFill;

	static solidFillWithColorCornerRadius(color: UIColor, cornerRadius: number): TKSolidFill;

	color: UIColor;

	constructor(o: { color: UIColor; });

	constructor(o: { color: UIColor; cornerRadius: number; });

	initWithColor(color: UIColor): this;

	initWithColorCornerRadius(color: UIColor, cornerRadius: number): this;
}

declare class TKStackLayout extends NSObject implements TKLayout {

	static alloc(): TKStackLayout; // inherited from NSObject

	static new(): TKStackLayout; // inherited from NSObject

	alignment: TKStackLayoutAlignment;

	readonly arrangedViews: NSArray<any>;

	distribution: TKStackLayoutDistribution;

	spacing: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	frame: CGRect; // inherited from TKLayout

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	orientation: TKLayoutOrientation; // inherited from TKLayout

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; });

	addArrangedView(view: UIView): void;

	arrangeViewWithLayoutInfo(view: UIView, layoutInfo: TKLayoutInfo): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFrame(frame: CGRect): this;

	insertArrangedViewAtIndex(view: UIView, index: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutArrangedViews(): void;

	measurePreferredSizeThatFitsSize(size: CGSize): CGSize;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllArrangedViews(): void;

	removeArrangedView(view: UIView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TKStackLayoutAlignment {

	Fill = 0,

	Top = 1,

	Center = 2,

	Bottom = 3,

	Leading = 4,

	Trailing = 5
}

declare const enum TKStackLayoutDistribution {

	None = 0,

	FillEqually = 1,

	FillProportionally = 2
}

declare class TKStroke extends NSObject implements NSCopying, TKDrawing {

	static alloc(): TKStroke; // inherited from NSObject

	static new(): TKStroke; // inherited from NSObject

	static strokeWithColor(color: UIColor): TKStroke;

	static strokeWithColorWidth(color: UIColor, width: number): TKStroke;

	static strokeWithColorWidthCornerRadius(color: UIColor, width: number, cornerRadius: number): TKStroke;

	static strokeWithFill(fill: TKFill): TKStroke;

	static strokeWithFillWidth(fill: TKFill, width: number): TKStroke;

	static strokeWithFillWidthCornerRadius(fill: TKFill, width: number, cornerRadius: number): TKStroke;

	allowsAntialiasing: boolean;

	color: UIColor;

	cornerRadius: number;

	corners: UIRectCorner;

	dashPattern: NSArray<any>;

	fill: TKFill;

	lineCap: CGLineCap;

	lineJoin: CGLineJoin;

	miterLimit: number;

	phase: number;

	shadowBlur: number;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	strokeSides: TKRectSide;

	width: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	insets: UIEdgeInsets; // inherited from TKDrawing

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { color: UIColor; });

	constructor(o: { color: UIColor; width: number; });

	constructor(o: { fill: TKFill; });

	constructor(o: { fill: TKFill; width: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	drawInContextWithPath(context: any, path: any): void;

	drawInContextWithRect(context: any, rect: CGRect): void;

	initWithColor(color: UIColor): this;

	initWithColorWidth(color: UIColor, width: number): this;

	initWithFill(fill: TKFill): this;

	initWithFillWidth(fill: TKFill, width: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKStyleGroup extends NSObject {

	static alloc(): TKStyleGroup; // inherited from NSObject

	static new(): TKStyleGroup; // inherited from NSObject

	static styleGroupWithClassSettings(aClass: typeof NSObject, settings: NSDictionary<any, any>): any;

	static styleGroupWithClassStateSettings(aClass: typeof NSObject, aState: number, settings: NSDictionary<any, any>): any;

	readonly properties: NSDictionary<any, any>;

	styleID: TKStyleID;

	constructor(o: { class: typeof NSObject; });

	applyStyleToNode(node: TKStyleNode): void;

	initWithClass(aClass: typeof NSObject): this;

	propettyValueForKey(key: string): any;

	resetPropertyValues(): void;

	setPropertyValueForKey(value: any, key: string): void;
}

declare class TKStyleGroupProperty extends NSObject {

	static alloc(): TKStyleGroupProperty; // inherited from NSObject

	static new(): TKStyleGroupProperty; // inherited from NSObject

	isKeyPath: boolean;

	value: any;
}

declare class TKStyleID extends NSObject {

	static alloc(): TKStyleID; // inherited from NSObject

	static new(): TKStyleID; // inherited from NSObject

	conditionClass: typeof NSObject;

	state: number;

	stylableClass: typeof NSObject;

	constructor(o: { class: typeof NSObject; withState: number; });

	initWithClassWithState(aStylableClass: typeof NSObject, aState: number): this;
}

declare class TKStyleNode extends NSObject {

	static alloc(): TKStyleNode; // inherited from NSObject

	static new(): TKStyleNode; // inherited from NSObject

	readonly isThemeBlock: boolean;

	styleID: TKStyleID;

	beginThemeBlock(): void;

	canSetValue(value: number): boolean;

	endThemeBlock(): void;

	resetLocalValues(): void;
}

declare class TKStyleSheet extends NSObject {

	static alloc(): TKStyleSheet; // inherited from NSObject

	static new(): TKStyleSheet; // inherited from NSObject

	readonly styleGroupsCount: number;

	addStyleGroup(aStyleGroup: TKStyleGroup): void;

	applyStylesToNode(node: TKStyleNode): void;

	removeAllStyleGroups(): void;

	removeStyleGroup(aStyleGroup: TKStyleGroup): void;
}

declare class TKTextFormatter extends NSObject {

	static alloc(): TKTextFormatter; // inherited from NSObject

	static formatValueWithStringFormat(value: any, format: string): string;

	static new(): TKTextFormatter; // inherited from NSObject
}

declare class TKTheme extends NSObject {

	static alloc(): TKTheme; // inherited from NSObject

	static new(): TKTheme; // inherited from NSObject

	addStyleGroup(aStyleGroup: TKStyleGroup): void;

	addStyleGroupWithClassSettings(aClass: typeof NSObject, settings: NSDictionary<any, any>): void;

	addStyleGroupWithClassStateSettings(aClass: typeof NSObject, aState: number, settings: NSDictionary<any, any>): void;

	removeAllStyleGroups(): void;

	removeStyleGroup(aStyleGroup: TKStyleGroup): void;

	stylesForClass(aClass: typeof NSObject): TKStyleSheet;
}

declare class TKView extends UIView {

	static alloc(): TKView; // inherited from NSObject

	static appearance(): TKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKView; // inherited from UIAppearance

	static new(): TKView; // inherited from NSObject

	static versionString(): string;

	drawables: NSArray<any>;

	fill: TKFill;

	layout: TKCoreLayout;

	shape: TKShape;

	stroke: TKStroke;
}

declare var TNSCoreVersionNumber: number;

declare var TNSCoreVersionString: interop.Reference<number>;
