/*   Christmas Escape Game   */

Function.prototype.member = function(name, value){
	this.prototype[name] = value
}

// Game
function Game() {}
Game.handItem = function(){
	return game.getHandItem()
}

/*   방 생성자 함수   */
roomwhite1 = game.createRoom("roomwhite1", "방1-1.png") // 하얀색방_메인
roomwhite2 = game.createRoom("roomwhite2", "방1-2.png") // 하얀색방_오른쪽
roomyellow1 = game.createRoom("roomyellow1", "방2-1.png") // 노란색방_메인
roomyellow2 = game.createRoom("roomyellow2", "방2-2.png") // 노란색방_메인확장(트리)
roomyellow3 = game.createRoom("roomyellow3", "방2-3.png") // 노란색방_측면(기타)
roomyellow4 = game.createRoom("roomyellow4", "방2-4.jpg") // 노란색방_화장실
roomyellow5 = game.createRoom("roomyellow5", "방2-5.png") // 노란색방_측면(식물)
roomred1 = game.createRoom("roomred1", "방3-1.png") // 붉은색방_메인
roomred2 = game.createRoom("roomred2", "방3-2.png") // 붉은색방_복도+액자
roomred3 = game.createRoom("roomred3", "방3-3.png") // 붉은방_현관문
roomred4 = game.createRoom("roomred4", "방3-4.png") // 붉은방_액자확대
room5 = game.createRoom("room5", "방4-1.png") // 병원
//*****************************************************************************************
room51 = game.createRoom("room51", "방4-2.png") // 엄마아빠
room52 = game.createRoom("room52", "방4-2.png") // 엄마아빠
room53 = game.createRoom("room53", "방4-2.png") // 엄마아빠
room54 = game.createRoom("room54", "방4-2.png") // 엄마아빠
room55 = game.createRoom("room55", "방4-2.png") // 엄마아빠
room56 = game.createRoom("room56", "방4-3.jpg") // 손잡는 엔딩씬
roomclock = game.createRoom("roomclock", "시계배경.png") // 시계배경
roomguitar = game.createRoom("roomguitar", "기타 배경.png") // 기타배경
roomlaptop = game.createRoom("roomlaptop", "맥북배경.png") // 맥북배경


/*   화살표 생성자 함수   */
function Arrow(room, nextroom, name, type) {
	this.room = room
	this.nextroom = nextroom
	this.name = name
	this.type = type

	var x_h = 1250
	var y_h = 680
	var low = 40
	var x_m = 650
	var y_m = 350

	if (this.type === 'right') {
		this.obj = room.createObject(name, '화살표오른쪽.png')
		this.obj.setWidth(50)
		this.room.locateObject(this.obj, x_h, y_m)
	}
	else if (this.type === 'left') {
		this.obj = room.createObject(name, '화살표왼쪽.png')
		this.obj.setWidth(50)
		this.room.locateObject(this.obj, low, y_m)
	}
	else if (this.type === 'down') {
		this.obj = room.createObject(name, '화살표아래쪽.png')
		this.obj.setWidth(50)
		this.room.locateObject(this.obj, x_m, y_h)
	}
	else if (this.type === 'up') {
		this.obj = room.createObject(name, '화살표위쪽.png')
		this.obj.setWidth(50)
		this.room.locateObject(this.obj, x_m, low)
	}
	else if (this.type === 'clock') {
		this.obj = room.createObject(name, '시계확대.png')
		this.obj.setWidth(60)
		this.room.locateObject(this.obj, 1175, 360)
	}
	else if (this.type === 'guitar') {
		this.obj = room.createObject(name, 'guitar.png')
		this.obj.setWidth(120)
		this.room.locateObject(this.obj, 857, 570)
	}
	else if (this.type === 'laptop') {
		this.obj = room.createObject(name, 'mac.png')
		this.obj.setWidth(150)
		this.room.locateObject(this.obj, 815, 395)
	}
	else { }
}

Arrow.prototype.onClick = function(){
	game.move(this.nextroom);
	if (this.type === 'clock') { printMessage("멈췄네...고장난 시계인가?") }
	else if (this.type === 'guitar') { printMessage("기타가 있네") }
	else if (this.type === 'laptop') { printMessage("우와, 컴퓨터다.") }
}

//화살표 생성
roomwhite1.a1 = new Arrow(roomwhite1, roomwhite2, 'a1', 'right')
roomwhite2.a2 = new Arrow(roomwhite2, roomwhite1, 'a2', 'left')
roomyellow1.a4 = new Arrow(roomyellow1, roomyellow2, 'a4', 'down')
roomyellow2.a7 = new Arrow(roomyellow2, roomyellow3, 'a7', 'right')
roomyellow2.a8 = new Arrow(roomyellow2, roomyellow5, 'a8', 'left')
roomyellow3.a10 = new Arrow(roomyellow3, roomyellow2, 'a10', 'left')
roomyellow4.a11 = new Arrow(roomyellow4, roomyellow1, 'a11', 'down')
roomyellow5.a13 = new Arrow(roomyellow5, roomyellow2, 'a13', 'right')
roomred2.a15 = new Arrow(roomred2, roomred3, 'a15', 'right')
roomred3.a16 = new Arrow(roomred3, roomred1, 'a16', 'right')
roomred3.a17 = new Arrow(roomred3, roomred2, 'a17', 'left')
roomred1.a18 = new Arrow(roomred1, roomred3, 'a18', 'left')
roomred4.a19 = new Arrow(roomred4, roomred2, 'a19', 'down')
roomclock.a20 = new Arrow(roomclock, roomyellow1, 'a20', 'down')
roomyellow1.a21 = new Arrow(roomyellow1, roomclock, 'a21', 'clock')
roomyellow3.a22 = new Arrow(roomyellow3, roomguitar, 'a22', 'guitar')
roomguitar.a23 = new Arrow(roomguitar, roomyellow3, 'a23', 'down')
roomwhite2.a24 = new Arrow(roomwhite2, roomlaptop, 'a24', 'laptop')
roomlaptop.a25 = new Arrow(roomlaptop, roomwhite2, 'a25', 'down')


//문 생성자 함수
function Door(room, name, closedImage, openedImage, connectedTo, width, x, y, state){
	this.room = room
	this.name = name
	this.closedImage = closedImage
	this.openedImage = openedImage
	this.connectedTo = connectedTo
	
	this.obj = room.createObject(name, closedImage)
	this.obj.setWidth(width)
	this.room.locateObject(this.obj, x, y)
	this.obj.state = state
}

Door.prototype.onClick = function(){
		if(this.obj.state == -2){
			printMessage("문이 잠겨있어.")	//화장실 문 잠김
		}
		else if(this.obj.state == -1){
			printMessage("문이 잠겨있어.")	//별문 잠김
			if(roomyellow2.star.handed()){	/////roomyellow5.wateringcan
				printMessage("문이 열렸어!")
				this.obj.state = 0
				playSound("문잠금풀리는소리.wav")
				roomyellow5.star2.show()
			}
		}
		else if(this.obj.state == 0){
			playSound("문열리는소리.wav")
			this.obj.setSprite(this.openedImage)
			this.obj.state = 1
			roomyellow5.star2.hide()
		}
		else if(this.obj.state == 1){
			game.move(this.connectedTo)
		}
}
roomyellow5.star2 = roomyellow5.createObject("star2", "문에달린별.png")
roomyellow5.star2.setWidth(65)
roomyellow5.locateObject(roomyellow5.star2, 223, 203)
roomyellow5.star2.hide()



//문 생성
roomyellow1.door1 = new Door(roomyellow1, 'door1', 'door1-c.png', 'door1-o.png', roomyellow4, 100, 1100, 380, -2)	//화장실 문
roomyellow5.door2 = new Door(roomyellow5, 'door2', 'door2-closed.png', 'door2-opened.png', roomred2, 195, 220, 400, -1)	//빨간방으로 가는 문
roomred2.door3 = new Door(roomred2, 'door3', 'door3-opened.png', 'door3-opened.png', roomyellow5, 85, 117, 380, 1)	//빨간방에서 노란방

/*   Stair 생성자   */
function Stair(room, name, Image, connectedTo, width, x, y){
	this.room = room
	this.name = name
	this.Image = Image
	this.connectedTo = connectedTo
	
	this.obj = room.createObject(name, Image)
	this.obj.setWidth(width)
	this.room.locateObject(this.obj, x, y)
}

Stair.prototype.onClick = function(){
	game.move(this.connectedTo)
}

roomwhite2.stair1 = new Stair(roomwhite2, 'stair1', 'stair1.png', roomyellow1, 550, 1000, 585)
roomyellow1.stair2 = new Stair(roomyellow1, 'stair2', 'stair2.png', roomwhite2, 150, 80, 450)
roomyellow2.stair3 = new Stair(roomyellow2, 'stair3', 'stair3.png', roomyellow1, 550, 520, 200)


/*      서랍 생성자 함수       */
function Drawer(room, name, clearImage, openedImage, width, x, y, locked, item){
    this.room = room
    this.name = name
    this.clearImage = clearImage
	this.openedImage = openedImage
	this.locked = locked
    this.item = item

    this.obj = room.createObject(name, clearImage)
    this.obj.setWidth(width)
    this.room.locateObject(this.obj, x, y)
    this.obj.state = 0
}

Drawer.prototype.onClick = function(){
	if(this.locked == 0){
		if(this.obj.state == 0){
        			this.obj.setSprite(this.openedImage)
        			this.obj.state = 1
			this.item.obj.show()
    		} else if(this.obj.state == 1){
			this.obj.setSprite(this.clearImage)
        			this.obj.state = 0
			this.item.obj.hide()
    		}	
	}else if(this.locked == 1){
		if(this.obj.state == 0){
			if(roomyellow3.rudolph_key.handed()){
				playSound("문열리는소리.wav")
				this.obj.setSprite(this.openedImage)
				this.obj.state = 1
				this.item.obj.show()
			} else {
				printMessage("서랍이 잠겨있어.")
			}	
		}else if(this.obj.state == 1){
			this.obj.setSprite(this.clearImage)
			this.obj.state = 0
			this.item.obj.hide()
		}
	}
}

//서랍 생성
roomwhite2.drawer1 = new Drawer(roomwhite2, 'drawer1', 'drawer1-clear.png', 'drawer1.png', 150, 700, 460, 0, 'NULL')
roomwhite2.drawer2 = new Drawer(roomwhite2, 'drawer2', 'drawer2-clear.png', 'drawer2.png', 190, 835, 495, 0, 'NULL')
roomyellow1.drawer3 = new Drawer(roomyellow1, 'drawer3', 'drawer3-clear.png', 'drawer3.png', 140, 540, 590, 0, 'NULL')
roomyellow4.drawer4 = new Drawer(roomyellow4, 'drawer4', 'drawer4-clear.png', 'drawer4.png', 305, 200, 575, 0, 'NULL')
roomyellow5.drawer5 = new Drawer(roomyellow5, 'drawer5', 'drawer5-clear.png', 'drawer5.png', 210, 695, 555, 0, 'NULL')
roomred2.drawer21=new Drawer(roomred2, 'drawer21', 'drawer21-clear.png', 'drawer21.png',220, 455, 620, 1, 'NULL')
roomred1.drawer22=new Drawer(roomred1, 'drawer22', 'drawer22-clear.png', 'drawer22.png',120, 570, 634, 0, 'NULL')


//Item 생성자
function Item(room, name, Image, width, x, y, drawer){
	this.room = room
	this.name = name
	this.Image = Image
	this.drawer = drawer

	this.obj = room.createObject(name, Image)
	this.obj.setWidth(width)
	this.room.locateObject(this.obj, x, y)

	this.drawer.item = this
}

Item.member('move', function(x,y){
	this.obj.moveX(x)
	this.obj.moveY(y)
})
Item.member('handed', function(){
	return Game.handItem() == this.obj
})
Item.member('setSprite', function(Image){
	this.Image = Image
	this.obj.setSprite(Image)
})

////*   roomwhite1 - Item   */////
roomwhite1.usb = new Item(roomwhite1, 'usb', 'usb.png', 30, 350, 600, 'NULL')
roomwhite1.usb.onClick = function(){
	roomwhite1.usb.obj.pick()
	printMessage("usb를 주웠어.")
}

roomwhite1.letter = new Item(roomwhite1, 'letter', 'letter.png', 180, 840, 540, 'NULL')
roomwhite1.letter.onClick = function(){
	showImageViewer("letter2.png");
	printMessage("이건 내가 산타할아버지에게 쓰다가 지운 편지야.\n이게 왜 여기있는걸까?")
}

roomwhite1.socks = new Item(roomwhite1, 'socks', 'roomwhite1양말.png', 300, 150, 650, 'NULL')
roomwhite1.socks.onClick = function(){
	roomwhite1.socks.obj.pick()
	printMessage("양말을 주웠어. 쓸만한 데가 있을까?")
}

roomwhite1.pinktree = new Item(roomwhite1, 'pinktree', 'pinktree.png', 200, 1030, 245, 'NULL')
roomwhite1.pinktree.onClick = function(){
	showImageViewer("pinktree2.png")
	printMessage("무슨 뜻이 있는걸까?")
}

roomwhite1.redtree = new Item(roomwhite1, 'redtree', 'redtree.png', 180, 60, 145, 'NULL')
roomwhite1.redtree.onClick = function(){
	showImageViewer("redtree2.png")
	printMessage("무슨 뜻이 있는걸까?")
}

/*   roomwhite2 - Item    */
roomwhite2.tree1 = new Item(roomwhite2, 'tree1', 'tree1.png', 30, 733, 435, roomwhite2.drawer1)
roomwhite2.tree1.obj.hide()
roomwhite2.tree1.onClick = function(){
	roomwhite2.tree1.obj.pick()
	printMessage("트리 장식이네.")
}


roomwhite2.greentree = new Item(roomwhite2, 'greentree', 'greentree.png', 100, 835, 490, roomwhite2.drawer2)
roomwhite2.greentree.obj.hide()
roomwhite2.greentree.onClick = function(){
	printMessage("이게 무슨 그림이지?")
	showImageViewer("greentree2.png");
}

//roomyellow1 - Item
roomyellow1.screen = new Item(roomyellow1, 'screen', '11시-흐림.png', 50, 355, 210, 'NULL')
roomyellow1.screen.obj.hide()
roomyellow1.TV = new Item(roomyellow1, 'TV', 'TV.png', 220, 355, 210, 'NULL')
roomyellow1.TV.onClick = function(){
   playSound("티비지지직.wav")
   roomyellow1.screen.obj.show()
   printMessage("TV 화면이 켜졌어!")
}
roomyellow1.book1 = new Item(roomyellow1, 'book1', 'book1.png', 120, 630, 90, 'NULL')
roomyellow1.book1.onClick = function(){
   showImageViewer("diary.png");
   printMessage("이게 무슨 뜻이지?")
}

roomyellow1.code = new Item(roomyellow1, 'code', 'code.png', 100, 540, 565, roomyellow1.drawer3)
roomyellow1.code.obj.hide()
roomyellow1.code.onClick = function(){
	roomyellow1.code.obj.pick()
	printMessage("전기 코드를 주웠어. 콘센트는 어디있지?")
}
roomyellow1.bluetree = new Item(roomyellow1, 'bluetree', 'bluetree.png', 95, 950, 215, 'NULL')
roomyellow1.bluetree.onClick = function(){
	showImageViewer("bluetree2.png")
	printMessage("무슨 뜻이 있는걸까?")
}

/*   roomyellow2 - Item - 트리 배치   */
var treecount = 0
roomyellow2.tree_1st = new Item(roomyellow2, 'tree_1st', 'tree-1st.png', 280, 900, 570, 'NULL')
roomyellow2.tree_1st.onClick = function(){
	if(roomwhite2.tree1.handed()){
		printMessage("트리장식을 걸었어!")
		roomyellow2.tree_1.obj.show()
		treecount = treecount+1;
		if(treecount == 4){
			roomyellow2.star.obj.show()
			printMessage("트리에 별이 생겼어!")
		}
	}
}
roomyellow2.tree_1 = new Item(roomyellow2, 'tree_1', 'tree1.png', 60, 980, 550, 'NULL')
roomyellow2.tree_1.obj.hide()
//
roomyellow2.tree_2nd = new Item(roomyellow2, 'tree_2nd', 'tree-2nd.png', 190, 890, 450, 'NULL')


roomyellow2.tree_2nd.onClick = function(){
	if(roomwhite1.socks.handed()){
		printMessage("트리에 양말을 장식했어!")
		roomyellow2.tree_2.obj.show()
		treecount = treecount+1;
		if(treecount == 4){
			roomyellow2.star.obj.show()
			printMessage("트리에 별이 생겼어!")
		}
	}
}
roomyellow2.tree_2 = new Item(roomyellow2, 'tree_2', 'tree2.png', 110, 850, 455, 'NULL')
roomyellow2.tree_2.obj.hide()
//
roomyellow2.tree_3rd = new Item(roomyellow2, 'tree_3rd', 'tree-3rd.png', 140, 895, 330, 'NULL')
roomyellow2.tree_3rd.onClick = function(){
	if(roomyellow4.tree3.handed()){
		printMessage("트리에 종을 장식했어!")
		roomyellow2.tree_3.obj.show()
		treecount = treecount+1;
		if(treecount == 4){
			roomyellow2.star.obj.show()
			printMessage("트리에 별이 생겼어!")
		}
	}
}
roomyellow2.tree_3 = new Item(roomyellow2, 'tree_3', 'tree3.png', 90, 920, 325, 'NULL')
roomyellow2.tree_3.obj.hide()
//
roomyellow2.tree_4th = new Item(roomyellow2, 'tree_4th', 'tree-4th.png', 70, 902, 230, 'NULL')
roomyellow2.tree_4th.onClick = function(){
	if(roomyellow5.tree4.handed()){
		printMessage("트리에 나무열매를 장식했어!")
		roomyellow2.tree_4.obj.show()
		treecount = treecount+1;
		if(treecount == 4){
			roomyellow2.star.obj.show()
			printMessage("트리에 별이 생겼어!")
		}
	}
}
roomyellow2.tree_4 = new Item(roomyellow2, 'tree_4', 'tree4.png', 80, 900, 240, 'NULL')
roomyellow2.tree_4.obj.hide()
//
roomyellow2.star = new Item(roomyellow2, 'star', 'star.png', 100, 910, 150, 'NULL')
roomyellow2.star.obj.hide()
roomyellow2.star.onClick = function(){
	roomyellow2.star.obj.pick()
	printMessage("별을 얻었어. 어디서 별을 본 거 같은데..")
}

/*   roomyellow3 - Item   */
roomyellow3.book2 = new Item(roomyellow3, 'book2', 'book2.png', 200, 930, 185, 'NULL')
roomyellow3.book2.onClick = function(){
	showImageViewer("medical.png")
	printMessage("....")
}

var DeerOn = 0
var R_key = 0

roomyellow3.deer = new Item(roomyellow3, 'deer', 'deer1.png', 150, 220, 330, 'NULL')
roomyellow3.deer.onClick = function(){
	if (DeerOn == 0) { printMessage("루돌프 코에 불이 꺼져있네..")}
	else { printMessage("코에 불이 들어왔어! 그렇지만 여전히 움직이지는 않아.") }
}

roomyellow3.rudolph = new Item(roomyellow3, 'rudolph', 'rudolph.png', 320, 240, 500, 'NULL')
roomyellow3.rudolph.obj.hide()
roomyellow3.rudolph.onClick = function(){
   if(R_key == 0){
	roomyellow3.rudolph.setSprite('rudolph2.png')
   	printMessage("열쇠를 얻었어!")
   	roomyellow3.rudolph_key.obj.pick()
	R_key = 1
}else{
	
}
   
}
roomyellow3.rudolph_key = new Item(roomyellow3, 'rudolph_key', 'rudolph_key.png', 30, 100, 100, 'NULL')
roomyellow3.rudolph_key.obj.hide()

roomyellow3.grammy = new Item(roomyellow3, 'grammy', 'grammy.png', 100, 435, 380, 'NULL')
roomyellow3.grammy.onClick = function(){
	playSound("고요한밤.wav")
	printMessage("고요한 밤~ 거룩한 밤~")
}

roomyellow3.tissue = new Item(roomyellow3, 'tissue', 'tissue.png', 70, 725, 170, 'NULL')
roomyellow3.tissue.onClick = function(){
	showImageViewer("tissue2.png")
	printMessage("휴지에 뭔가 그려져있잖아?")
}
roomyellow3.socket = new Item(roomyellow3, 'socket', 'socket.png', 40, 520, 380, 'NULL')
roomyellow3.socket.onClick = function(){
	if(roomyellow1.code.handed()){
		roomyellow3.code2.obj.show()
		roomyellow3.deer.setSprite('deer2.png')
		printMessage("코에 불이 들어왔어! 그렇지만 여전히 움직이지는 않아.")
		DeerOn = 1
	}
}

roomyellow3.code2 = new Item(roomyellow3, 'code2', 'code2.png', 390, 355, 420, 'NULL')
roomyellow3.code2.obj.hide()

//roomyellow4 - Item
roomyellow4.mirror = new Item(roomyellow4, 'mirror', 'mirror.png', 400, 650, 230, 'NULL')
roomyellow4.mirror.onDrag = function(direction){
   if(direction == "Up" && roomyellow4.mirror.obj.move){
      printMessage("거울이 밀리네!")
      roomyellow4.mirror.obj.moveX(0)
      roomyellow4.mirror.obj.moveY(-100)
      roomyellow4.mirror.obj.move = false
      roomyellow4.tree3.obj.show()
   }
}


roomyellow4.tree3 = new Item(roomyellow4, 'tree3', 'tree3.png', 70, 650, 240, 'NULL')
roomyellow4.tree3.onClick = function(){
	roomyellow4.tree3.obj.pick()
	printMessage("트리 장식이야!")
}
roomyellow4.tree3.obj.hide()

roomyellow4.water = new Item(roomyellow4, 'water', 'water.png', 450, 650, 390, 'NULL')
roomyellow4.water.onClick = function(){
	if(roomyellow5.wateringcan.handed()){
		playSound("물뜨는소리.wav")
		printMessage("물뿌리개에 물을 가득 채웠어.")
		roomyellow5.wateringcan.state = 1
	}
}
roomyellow4.paper = new Item(roomyellow4, 'paper', 'paper.png', 30, 280, 610, roomyellow4.drawer4)
roomyellow4.paper.obj.hide()
roomyellow4.paper.onClick = function(){
	showImageViewer("paper2.png");
	printMessage("무슨 뜻일까?")
}
//roomyellow5 - Item
roomyellow5.wateringcan = new Item(roomyellow5, 'wateringcan', 'wateringcan.png', 80, 645, 600, roomyellow5.drawer5)
roomyellow5.wateringcan.state = 0 // state {0 : 물 없음, 1 : 물 있음}
roomyellow5.wateringcan.obj.hide()
roomyellow5.wateringcan.onClick = function(){
	roomyellow5.wateringcan.obj.pick()
	printMessage("비어 있는 물뿌리개야.")
}
roomyellow5.plant = new Item(roomyellow5, 'plant', 'plant.png', 90, 580, 395, 'NULL')
roomyellow5.plant.onClick = function(){
	if(roomyellow5.wateringcan.handed()){
		if(roomyellow5.wateringcan.state == 0){
			printMessage("물뿌리개에 물이 없어.")
		}
		else if(roomyellow5.wateringcan.state == 1){
			roomyellow5.tree4.obj.show()
			printMessage("식물이 자라났어! 트리 장식으로 쓸 수 있을거야.")
		}
	}
}
roomyellow5.tree4 = new Item(roomyellow5, 'tree4', 'tree4.png', 100, 580, 360, 'NULL')
roomyellow5.tree4.obj.hide()
roomyellow5.tree4.onClick = function(){
	roomyellow5.tree4.obj.pick()
}

/*빨간방1 아이템*/
roomred1.window = new Item(roomred1, 'window', 'window.png', 200, 650, 50, 'NULL')
roomred1.window.obj.hide()
roomred1.window.onClick = function(){
	showImageViewer("windowhint.png")
	printMessage("창문에 그림이 그려져있네?")
	}

roomred1.curtain = new Item(roomred1, 'curtain', 'curtain.png', 200, 670, 120, 'NULL')
roomred1.curtain.onClick = function(){
	roomred1.curtain.obj.hide()
	roomred1.window.obj.show()
	}

roomred1.cathint = new Item(roomred1, 'cathint', 'cathint.png', 70, 870, 270, 'NULL')
roomred1.cathint.obj.hide()
roomred1.cathint.onClick = function(){
	showImageViewer("snowmanhint.png")
	printMessage("무슨 뜻이지?")
	}

roomred1.catclear = new Item(roomred1, 'catclear', 'catclear.png', 200, 170, 430, 'NULL')
roomred1.catclear.obj.hide()

roomred1.cat = new Item(roomred1, 'cat', 'cat.png', 100, 870, 240, 'NULL')
roomred1.cat.onClick = function() {
	if(roomred3.mouse.handed())
		{
		playSound("고양이소리.wav")
		printMessage("고양이가 움직였어!")
		roomred1.cat.obj.hide()
		roomred1.catclear.obj.show()
		roomred1.cathint.obj.show()
		}
	else
	{
	printMessage("고양이가 자리에서 비켜주지 않고 있어. 밑에 뭔가 종이가 있는데....?")
	}
}
roomred1.cheese = new Item(roomred1, 'cheese', 'cheese.png', 60, 560, 610, roomred1.drawer22)
roomred1.cheese.obj.hide()
roomred1.cheese.onClick = function(){
	roomred1.cheese.obj.pick()
	printMessage("치즈를 서랍에서 꺼냈어.")
	}



/*빨간방2 아이템*/

roomred2.snowmankey = new Item(roomred2, 'snowmankey', 'snowmankey.png', 50, 660, 690, 'NULL')
roomred2.snowmankey.obj.hide()
roomred2.snowmankey.onClick = function(){
	roomred2.snowmankey.obj.pick()
	printMessage("눈사람에서 열쇠가 나왔어.")
	}

roomred2.snowman = new Item(roomred2, 'snowman', 'snowman.png', 80, 500, 600, roomred2.drawer21)
roomred2.snowman.onClick = function(){
	roomred2.snowman.obj.pick()
	printMessage("눈사람을 발견했어.")
	}
roomred2.snowman.obj.hide()


roomred2.candle = new Item(roomred2, 'candle', 'candle.png', 186, 614, 451, 'NULL')
roomred2.candle.onClick = function(){
	if(roomred2.match.handed())
		{
		playSound("candle.wav");
		printMessage("촛불이 켜졌어!")
		roomred2.candle.obj.hide()
		roomred2.candleclear.obj.show()
		}
	else
	{
		printMessage("촛불이 꺼져있어.")
	}
}

roomred2.drawer20=new Drawer(roomred2, 'drawer20', 'drawer20-clear.png', 'drawer20.png', 160, 750, 525, 0, 'NULL')

roomred2.match = new Item(roomred2, 'match', 'match.png', 60, 750, 500, roomred2.drawer20)
roomred2.match.onClick = function(){
	roomred2.match.obj.pick()
	printMessage("성냥이다. 촛불을 밝힐 수 있을 것 같아.")
}
roomred2.match.obj.hide()


roomred2.candleclear = new Item(roomred2, 'candleclear', 'candleclear.png', 140, 610, 425, 'NULL')
roomred2.candleclear.obj.hide()
roomred2.candleclear.onClick = function(){
	if(roomred2.snowman.handed())
		{
		printMessage("눈사람이 녹았어!")
		roomred2.snowman.obj.hide()
		roomred2.snowmankey.obj.show()
		playSound("열쇠떨어지는소리.wav")
		}
	else
	{
		printMessage("촛불이 타고있어.")
	}
}

roomred2.book3 = new Item(roomred2, 'book3', 'book3.png', 80, 460, 450, 'NULL')
roomred2.book3.onClick = function(){
	showImageViewer("note.png");
	printMessage("... 엄마의 글씨야.")
}

roomred2.door20 = new Item(roomred2, 'door20', 'door20.png', 90, 110, 380, 'NULL')
roomred2.door20.onClick = function(){
	game.move(roomyellow5)
	}


roomred2.framepic = new Item(roomred2, 'framepic', 'framepic.png', 450, 600, 180, 'NULL')
roomred2.framepic.onClick = function(){
		game.move(roomred4)
		printMessage("퍼즐이 있어.")

}

roomred2.puzzle = roomred2.createObject("puzzle", "퍼즐미완.png")
roomred2.puzzle.setWidth(175)
roomred2.locateObject(roomred2.puzzle, 501, 313)

/*빨간방3 아이템*/
roomred3.mouse = new Item(roomred3, 'mouse', 'mouse.png', 60, 1050, 610, 'NULL')
roomred3.mouse.obj.hide()
roomred3.mouse.onClick = function(){
	roomred3.mouse.obj.pick()
	printMessage("생쥐를 잡았어!")
	}


roomred3.cheese1 = new Item(roomred3, 'cheese1', 'cheese_1.png', 40, 1100, 610, 'NULL')
roomred3.cheese1.obj.hide()


roomred3.dish = new Item(roomred3, 'dish', 'dish.png', 60, 1100, 620, 'NULL')
roomred3.dish.onClick = function(){
	if(roomred1.cheese.handed())
		{
		printMessage("치즈를 놓으니 쥐구멍에서 쥐가 나왔네!")
		roomred3.mouse.obj.show()
		roomred3.cheese1.obj.show()
		}
	else
	{
		printMessage("쥐구멍 앞에 접시가 놓여있어.")
	}
}

roomred3.maindoor = new Item(roomred3, 'maindoor', 'maindoor_clear.png', 230, 675, 337, 'NULL')
roomred3.maindoor.onClick = function(){
	playSound("문열리는소리.wav")

	if(roomred2.snowmankey.handed())
		{
		if(CanEscape == 0){
			printMessage("내가 놓친 편지가 있을지도 몰라.")
		}
		else if(CanEscape == 1){
			roomred3.maindoor.setSprite("maindoor.png")
			CanEscape = 2
		}
		else if(CanEscape == 2){
			playSound("탈출성공배경음.wav")
			game.move(room5)
			printMessage("문을 열고 나오니 내가 있던 병실이 보이네... \n모두 다 그냥 꿈이었던걸까?")
		}}
	else
	{
		printMessage("문이 잠겨있어.")
	}
}

//*****************************************************************************************
room5.page0 = new Item(room5, 'page0', 'ending.png', 1300, 650, 350, 'NULL')
room5.page0.onClick = function(){
			game.move(room51)
			printMessage("일어났니..? 메리 크리스마스!")
}
room51.page1 = new Item(room51, 'page1', 'ending.png', 1300, 650, 350, 'NULL')
room51.page1.onClick = function(){
			game.move(room52)
			printMessage("'...엄마아빠?'")
}
room52.page2 = new Item(room52, 'page2', 'ending.png', 1300, 650, 350, 'NULL')
room52.page2.onClick = function(){
			game.move(room53)
			printMessage("우리에게 크리스마스의 기적이 일어났어!\n 너의 어제 수술이 성공적으로 끝났단다...!")
}
room53.page3 = new Item(room53, 'page3', 'ending.png', 1300, 650, 350, 'NULL')
room53.page3.onClick = function(){
			game.move(room54)
			printMessage("'세상에....이게 산타할아버지가 말한 선물인걸까...?'")
}
room54.page4 = new Item(room54, 'page4', 'ending.png', 1300, 650, 350, 'NULL')
room54.page4.onClick = function(){
			game.move(room56)
			printMessage("'산타할아버지.. 고맙습니다..!'")
}
room56.page6 = new Item(room56, 'page6', 'ending.png', 1300, 650, 350, 'NULL')
room56.page6.onClick = function(){
			game.clear()
}

//퍼즐
var pState = [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
var CanEscape = 0

function Puzzle(name, Image0, Image1, Image2, Image3, x, y, now, index){
  this.name = name
  this.index = index

  this.Image0 = Image0
  this.Image1 = Image1
  this.Image2 = Image2
  this.Image3 = Image3

  this.obj = roomred4.createObject(name, Image0)
  this.obj.setWidth(70)
  roomred4.locateObject(this.obj, x+10, y-5)

  this.now = now
  if(this.now == 0){
    this.obj.setSprite(this.Image0)
  }
  else if(this.now == 1){
    this.obj.setSprite(this.Image1)
  }
  else if(this.now == 2){
    this.obj.setSprite(this.Image2)
  }
  else if(this.now == 3){
    this.obj.setSprite(this.Image3)
  }
}

Puzzle.prototype.onClick = function(){
  this.now = this.now+1
  this.now = this.now%4

  playSound("퍼즐소리.wav");

  if(this.now == 0){
    this.obj.setSprite(this.Image0)
    pState[this.index] = 1
  }
  else if(this.now == 1){
    this.obj.setSprite(this.Image1)
    pState[this.indoex] = 0
  }
  else if(this.now == 2){
    this.obj.setSprite(this.Image2)
    pState[this.indoex] = 0
  }
  else if(this.now == 3){
    this.obj.setSprite(this.Image3)
    pState[this.indoex] = 0
  }
  else{}

  var pStateSum1 = pState[0] + pState[1] + pState[2] + pState[3]
  var pStateSum2 = pState[4] + pState[5] + pState[6] + pState[7]
  var pStateSum3 = pState[8] + pState[9] + pState[10] + pState[11]

  if(pStateSum1==4 && pStateSum2==4 && pStateSum3==4){
    roomred4.pDone.show()
  }
}

roomred4.pBG = roomred4.createObject("pBG", "빈퍼즐.png")
roomred4.pBG.setWidth(320)
roomred4.locateObject(roomred4.pBG, 445, 565)

roomred4.p11 = new Puzzle("p11", "p110.png", "p111.png", "p112.png", "p113.png", 330, 500, 2, 0)  //nownumber은 0~3
roomred4.p12 = new Puzzle("p12", "p120.png", "p121.png", "p122.png", "p123.png", 400, 500, 3, 1)
roomred4.p13 = new Puzzle("p13", "p130.png", "p131.png", "p132.png", "p133.png", 470, 500, 3, 2)
roomred4.p14 = new Puzzle("p14", "p140.png", "p141.png", "p142.png", "p143.png", 540, 500, 3, 3)

roomred4.p21 = new Puzzle("p21", "p210.png", "p211.png", "p212.png", "p213.png", 330, 570, 1, 4)  //nownumber은 0~3
roomred4.p22 = new Puzzle("p22", "p220.png", "p221.png", "p222.png", "p223.png", 400, 570, 2, 5)
roomred4.p23 = new Puzzle("p23", "p230.png", "p231.png", "p232.png", "p233.png", 470, 570, 0, 6)
roomred4.p24 = new Puzzle("p24", "p240.png", "p241.png", "p242.png", "p243.png", 540, 570, 2, 7)

roomred4.p31 = new Puzzle("p31", "p310.png", "p311.png", "p312.png", "p313.png", 330, 640, 0, 8)  //nownumber은 0~3
roomred4.p32 = new Puzzle("p32", "p320.png", "p321.png", "p322.png", "p323.png", 400, 640, 3, 9)
roomred4.p33 = new Puzzle("p33", "p330.png", "p331.png", "p332.png", "p333.png", 470, 640, 2, 10)
roomred4.p34 = new Puzzle("p34", "p340.png", "p341.png", "p342.png", "p343.png", 540, 640, 3, 11)

roomred4.pDone = roomred4.createObject("pDone", "퍼즐전체.png")
roomred4.pDone.setWidth(320)
roomred4.locateObject(roomred4.pDone, 445, 565)
roomred4.pDone.hide()

roomred4.wish = roomred4.createObject("wish", "소원.png")
roomred4.wish.setWidth(130)
roomred4.locateObject(roomred4.wish, 500, 530)
roomred4.wish.hide()

roomred4.letter = roomred4.createObject("letter", "마지막편지.png")
roomred4.letter.setWidth(140)
roomred4.locateObject(roomred4.letter, 400, 580)
roomred4.letter.hide()

roomred4.pDone.onClick = function(){
  roomred4.pDone.setSprite("빈퍼즐.png")
  printMessage("편지가 숨겨져 있었어!")
  roomred4.wish.show()
  roomred4.letter.show()
  CanEscape = 1
  roomred2.puzzle.setSprite("퍼즐전체.png")
}

roomred4.wish.onClick = function(){
  showImageViewer("소원큰거.png")
  printMessage("내가 쓴 편지잖아..?")
}

roomred4.letter.onClick = function(){
  showImageViewer("마지막편지클릭.png")
  printMessage("우와! 산타할아버지가 나한테 편지를 써줬어!")
}


/*   시계 생성자 함수   */
function Clock(name, next, type, image, x, y, w, tf) {
	this.name = name
	this.next = next
	this.type = type
	this.image = image
	this.x = x
	this.y = y
	this.w = w
	this.tf = tf

	this.obj = roomclock.createObject(name, image)
	this.obj.setWidth(w)
	roomclock.locateObject(this.obj, x, y)
	this.obj.hide()
}

//시계생성
roomclock.h12 = new Clock('h12', roomclock.h1, 'j', "12시.png", 641, 310, 60, 'F')
roomclock.h11 = new Clock('h11', roomclock.h12, 'h', "11시.png", 605, 322, 90, 'F')
roomclock.h10 = new Clock('h10', roomclock.h11, 'h', "10시.png", 582, 348, 110, 'T')
roomclock.h9 = new Clock('h9', roomclock.h10, 'h', "9시.png", 574, 380, 100, 'F')
roomclock.h8 = new Clock('h8', roomclock.h9, 'h', "8시.png", 585, 410, 110, 'F')
roomclock.h7 = new Clock('h7', roomclock.h8, 'h', "7시.png", 610, 430, 95, 'F')
roomclock.h6 = new Clock('h6', roomclock.h7, 'h', "6시.png", 645, 438, 51, 'F')
roomclock.h5 = new Clock('h5', roomclock.h6, 'h', "5시.png", 678, 426, 90, 'F')
roomclock.h4 = new Clock('h4', roomclock.h5, 'h', "4시.png", 695, 405, 102, 'F')
roomclock.h3 = new Clock('h3', roomclock.h4, 'h', "3시.png", 705, 374, 95, 'F')
roomclock.h2 = new Clock('h2', roomclock.h3, 'h', "2시.png", 696, 344, 105, 'F')
roomclock.h1 = new Clock('h1', roomclock.h2, 'h', "1시.png", 676, 323, 95, 'F')

roomclock.m55 = new Clock('m55', roomclock.m60, 'k', "55분.png", 595, 305, 110, 'F')
roomclock.m50 = new Clock('m50', roomclock.m55, 'm', "50분.png", 565, 333, 142, 'F')
roomclock.m45 = new Clock('m45', roomclock.m50, 'm', "45분.png", 554, 374, 133, 'F')
roomclock.m40 = new Clock('m40', roomclock.m45, 'm', "40분.png", 567, 423, 140, 'F')
roomclock.m35 = new Clock('m35', roomclock.m40, 'm', "35분.png", 598, 457, 117, 'F')
roomclock.m30 = new Clock('m30', roomclock.m35, 'm', "30분.png", 640, 471, 48, 'F')
roomclock.m25 = new Clock('m25', roomclock.m30, 'm', "25분.png", 690, 458, 117, 'F')
roomclock.m20 = new Clock('m20', roomclock.m25, 'm', "20분.png", 718, 424, 142, 'F')
roomclock.m15 = new Clock('m15', roomclock.m20, 'm', "15분.png", 730, 374, 130, 'F')
roomclock.m10 = new Clock('m10', roomclock.m15, 'm', "10분.png", 715, 330, 138, 'T')
roomclock.m5 = new Clock('m5', roomclock.m10, 'm', "5분.png", 689, 304, 109, 'F')
roomclock.m60 = new Clock('m60', roomclock.m5, 'm', "60분.png", 641, 294, 48, 'F')

var clockkey1 = 0
var clockkey2 = 0
var clockkey3 = 0

Clock.prototype.onClick = function()
{
	this.obj.hide()
	playSound("시계소리.wav");

	if (this.type === 'j') {
		roomclock.h1.obj.show()
		clockkey1 = 0
	}
	else if (this.type === 'k') {	
		roomclock.m60.obj.show()
		clockkey2 = 0
	}
	else if (this.type === 'h') {
		if(this.tf === 'F') { clockkey1 = 0 }
		else { clockkey1 = 1 }
		this.next.obj.show()
	}
	else {
		if(this.tf === 'F') { clockkey2 = 0 }
		else { clockkey2 = 1 }
		this.next.obj.show()	
	}
	if (clockkey1 == 1 && clockkey2 == 1 && clockkey3 == 0) {
		playSound("문잠금풀리는소리.wav")
		printMessage("옆에 있는 문에서 철컥하는 소리가 들렸어!")
		roomyellow1.door1.obj.state = 0
		clockkey3 = 1
	}
}

roomclock.h1.obj.show()
roomclock.m60.obj.show()

/*   기타 생성자 함수   */

function Guitar(name, y) {
	this.name = name
	this.y = y

	this.obj = roomguitar.createObject(name, "기타줄.png")
	this.obj.setWidth(828)
	roomguitar.locateObject(this.obj, 639, y)
}

roomguitar.mi = new Guitar('mi', 235)
roomguitar.sol = new Guitar('sol', 287)
roomguitar.la = new Guitar('la', 335)
roomguitar.si = new Guitar('si', 385)
roomguitar.do = new Guitar('do', 432)
roomguitar.re = new Guitar('re', 477)

var done = 0

//솔라솔 미 솔라솔 미 레레 시 도도 솔
Guitar.prototype.onClick = function()
{
	if (DeerOn == 1){
		done = done + 1

   		if (this.name == 'mi') {
    			playSound("미.wav")
			if((done == 4) || (done == 8)) {}
			else {done = 0}
		}
		else if (this.name == 'sol') {
			playSound("솔.wav")
			if((done == 1) || (done == 3) || (done == 5) || (done == 7) || (done == 14)) { }
			else {done = 0}
		}
		else if (this.name == 'la') {
			playSound("라.wav")
			if ((done == 2) || (done == 6)) { }
			else {done = 0}
		}
		else if (this.name == 'si') {
			playSound("시.wav")
			if ((done == 11)) {}
			else {done = 0}
		}
		else if (this.name == 'do') {
			playSound("도.wav")
 			if ((done == 12) || (done == 13)) { }
 			else {done = 0}
		}
   		else {
			playSound("레.wav")
			if ((done == 9) || (done == 10)) { }
			else {done = 0}
		}

		if (done == 14) {
 			printMessage("연주 성공!");
			playSound("이어서.wav")
			roomyellow3.deer.obj.hide()
			roomyellow3.code2.obj.hide()
			roomyellow3.rudolph.obj.show()
			done = 0
		}
	}
	else if (DeerOn == 0){
		printMessage("기타 치기 전에 해야 할 것이 있지않을까?")
	}
	else { }
}

/*   맥북 생성자 함수   */

function Macbook(name, type, image, x, y, w, window, xicon) {
	this.name = name
	this.type = type
	this.image = image
	this.x = x
	this.y = y
	this.w = w
	this.window = window
	this.xicon = xicon

	this.obj = roomlaptop.createObject(name, image)
	this.obj.setWidth(w)
	roomlaptop.locateObject(this.obj, x, y)
	this.obj.hide()
	if (this.type === 'a' || this.type === 'f') {this.obj.show()}
}

roomlaptop.folder0 = new Macbook('folder0', 'c', "폴더0.png", 630, 310, 600, 'NULL', 'NULL')
roomlaptop.folder = new Macbook('folder', 'c', "폴더.png", 630, 310, 600, 'NULL', 'NULL')
roomlaptop.memo = new Macbook('memo', 'c', "메모장2.png", 660, 285, 600, 'NULL', 'NULL')
roomlaptop.picture1 = new Macbook('picture1', 'c', "나의 애마.png", 800, 260, 310, 'NULL', 'NULL')
roomlaptop.picture2 = new Macbook('picture2', 'c', "인생샷.png", 770, 240, 400, 'NULL', 'NULL')
roomlaptop.picture3 = new Macbook('picture3', 'c', "증명사진.png", 850, 260, 250, 'NULL', 'NULL')

roomlaptop.x1 = new Macbook('x1', 'd', "x아이콘.png", 940, 115, 20, roomlaptop.memo, 'NULL')
roomlaptop.x2 = new Macbook('x2', 'd', "x아이콘.png", 936, 108, 20, roomlaptop.picture1,  'NULL')
roomlaptop.x3 = new Macbook('x3', 'd', "x아이콘.png", 950, 102, 20, roomlaptop.picture2, 'NULL')
roomlaptop.x4 = new Macbook('x4', 'd', "x아이콘.png", 956, 82, 20, roomlaptop.picture3, 'NULL')
roomlaptop.x5 = new Macbook('x5', 'd', "x아이콘.png", 916, 132, 20, roomlaptop.folder, 'NULL')
roomlaptop.x6 = new Macbook('x6', 'd', "x아이콘.png", 916, 132, 20, roomlaptop.folder0, 'NULL')

roomlaptop.icon1 = new Macbook('icon1', 'a', "쓸모없는 아이콘.png", 580, 590, 660, 'NULL', 'NULL')
roomlaptop.icon2 = new Macbook('icon2', 'f', "폴더 아이콘.png", 937, 590, 42, roomlaptop.folder, roomlaptop.x5)
roomlaptop.icon3 = new Macbook('icon3', 'a', "쓸모없는 아이콘2.png", 995, 590, 70, 'NULL', 'NULL')
roomlaptop.icon4 = new Macbook('icon4', 'b', "메모장 아이콘.png", 520, 195, 60, roomlaptop.memo, roomlaptop.x1)
roomlaptop.icon5 = new Macbook('icon5', 'b', "나의 애마 확대.png", 587, 195, 60, roomlaptop.picture1, roomlaptop.x2)
roomlaptop.icon6 = new Macbook('icon6', 'b', "인생샷 확대.png", 653, 204, 57, roomlaptop.picture2, roomlaptop.x3)
roomlaptop.icon7 = new Macbook('icon7', 'b', "증명사진 확대.png", 719, 195, 44, roomlaptop.picture3, roomlaptop.x4)

var mac_usb = 0
var save = 0

Macbook.prototype.onClick = function() {

	playSound("클릭소리.wav")

	if(roomwhite1.usb.handed()){
		mac_usb = 1
		if (save == 0){
			playSound("usb꽂는소리.wav")
			printMessage("usb를 연결하였다.")
			save = 1 } }
	else {
		mac_usb = 0
		save = 0 }

	if (this.type === 'a') {	
		printMessage("여기엔 자료가 하나도 없네.")
	}

	if (mac_usb == 0) {
		if (this.type === 'f'){	
			roomlaptop.folder0.obj.show()
			roomlaptop.x6.obj.show()
			printMessage("자료가 하나도 없네.")
		}

		else if (this.type === 'd') {
			this.obj.hide()
			this.window.obj.hide()
			roomlaptop.folder.obj.hide()
		}
		else { roomlaptop.folder.obj.hide() }
	}
	else if (mac_usb == 1) {
		if (this.type === 'f'){	
			this.window.obj.show()
			this.xicon.obj.show()
			roomlaptop.icon4.obj.show()
			roomlaptop.icon5.obj.show()
			roomlaptop.icon6.obj.show()
			roomlaptop.icon7.obj.show()
		}
		else if (this.type === 'b'){
			this.window.obj.show()
			this.xicon.obj.show()
			roomlaptop.icon4.obj.hide()
			roomlaptop.icon5.obj.hide()
			roomlaptop.icon6.obj.hide()
			roomlaptop.icon7.obj.hide()
			roomlaptop.x5.obj.hide()
		}
		else if (this.type === 'd') {	
			this.obj.hide()
			this.window.obj.hide()
			if (this.name === 'x5') {
				roomlaptop.icon4.obj.hide()
				roomlaptop.icon5.obj.hide()
				roomlaptop.icon6.obj.hide()
				roomlaptop.icon7.obj.hide()
			}
			else {
				roomlaptop.icon4.obj.show()
				roomlaptop.icon5.obj.show()
				roomlaptop.icon6.obj.show()
				roomlaptop.icon7.obj.show()
				roomlaptop.x5.obj.show()
			}
		}
		else { }
	}
}


// 게임 시작
game.start(roomwhite1) // 게임시작
printMessage("으음..? 여기가 어디지? 난 분명 자고있었는데....")