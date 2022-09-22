
/*百度 ID: L18929567654
(C): MISTER_CHAN

版本:*/ const VERSION = "217.6.21"; /*
Since (DD/MM/YY): 06/03/16

*/ const RIGHT = "如欲转载, 必须注明出处."; /*
You must not copy the code or change the author's name.

※ usefulCommands 严禁使用方块启动器与 Toolbox 以外的启动器运行.
※ You must not use com.duowan.groundhog.mctools or other pupilar apps.*/

const BlockFriction = {ICE: Block.getFriction(79), STANDARD: Block.getFriction(0)},
	CTX = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
	FOR = "1.0",
	DYE_COLOR = [-15132391, -6737101, -10059981, -10073037, -13415246, -8339378, -11763815, -6710887, -11776948, -884827, -8401895, -1710797, -10053160, -5092136, -2588877, -1],
	Int = {MAX_VALUE: 2147483647, MIN_VALUE: -2147483648},
	Long = {MAX_VALUE: 9223372036854775807, MIN_VALUE: -9223372036854775808},
	MC_VER = ModPE.getMinecraftVersion(),
	Short = {MAX_VALUE: 32767, MIN_VALUE: -32768},
	TEXT_PARAMS = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT), TMI = CTX.getPackageName() == "io.mrarm.mctoolbox",
	UPDATES = "" +
		"\n版本: " + VERSION + "\n" +
		"\n如有建议或疑问 请在百度贴吧私讯作者\n" +
		RIGHT + "\n" +
		"如欲引用 usefulCommands 所含算法 必须注明出处 否则视为侵权\n" +
		"\n" + "=== 主要功能 ===" + "\n" +
		"1\t死亡防喷 (keep inventory)\n" +
		"2\t自动瞄准\n" +
		"3\t防跳虛空\n" +
		"4\t疾跑 跳跃提升\n" +
		"5\t穿墙\n" +
		"...\n" +
		"\n" + "=== 玩法 ===" + "\n" +
		"如有疑问 请尝试长按控件将可能显示帮助\n" +
		"如使用 Toolbox 运行 usefulCommands 将支持在服务器使用",
	Wnd = {WIDTH: CTX.getWindowManager().getDefaultDisplay().getWidth() / 4, HEIGHT: CTX.getWindowManager().getDefaultDisplay().getHeight() / 4};
var atapil = false, axpld = false,
	bi = {items: []}, bl = false,
	calc = {prev: "1 + 1"}, noFalling = {noFalling: false, height: 23, x: NaN, z: NaN}, carriedColor = 0, chat = {prev: "", window: undefined}, ctrller = {ctrller: false, velY: 0, window: undefined},
	died = false, doLangEdit = false,
	Ench = {}, enderEye = false, entroller = {ent: -1, pos: new Point()}, esc = false, Explode = {burnt: false, explode: false, radius: 4},
	featherFalling = false,
	hbr = {fb: EntityType.FIREBALL, hbr: false, vel: 5, window: undefined},
	inv = {dontGetItame: false}, invulnerable = false, isInGame = false,
	ki = {count: [], damage: [], enches: [], ki: false, id: [], lvl: 0, xp: 0},
	ladder = false, lan = null, ld = {rec: true, pos: new Point()}, list = [], locked = false, lockTime = -1, lockWeather = {lightning: -1, rain: -1},
	miner = false, ModTick = {speed: {millis: 50, nanos: 0}, type: false},
	ndt = [], noclip = new Point(), nvtm = [],
	paint = {clay: false, grass: false, wool: false}, pe = false, pickTile = false, ports = {ports: {name: [], pos: []}}, ppe = -1, pui = false,
	qsc = false, quickBuilding = {cube: {canSetPort: false, clipbrd: new Point(), lower: new Point(), name: false, upper: new Point()}, fillRoad: false, linear: {canDestroy: false, canPlace: false, direction: "x-", length: 0, ratt: false, fid: 0, fata: 0, step: 1}},
	rd = false, respawn = {dying: false, respawn: true, window: undefined}, rotatroller = {controller: false, invertYaxis: false, sensitivity: 1, window: undefined},
	Scenter = {distance: NaN, hotOres: ["14:", "15:", "16:", "21:", "56:", "73:", "74:", "89:", "129:", "153:"], inradius: 16, isSearching: false, nearestOre: new Point(), ore: "56:", scenter: false, showTime: 0}, shl = 0, signTextNa = false, sp = false, sprint = {time: false, vel: 0, velY: 0, x: NaN, z: NaN}, st = {editable: false},
	Target = {attackable: false, automatic: false, doGetPitch: true, ent: -1, i: false, regExp: "", text: undefined, window: undefined}, theme = 0, tipHp = true, tipPos = [], tipTile = false, treeCapitator = false, txtMnu, txtTipMsg,
	useItemToTp = 0, usePlyrLst = false,
	veinMiner = {maxMined: "2048", mined: 0, ores: ["14:", "15:", "16:", "21:", "56:", "73:", "74:", "89:", "129:", "153:"], veinMiner: false},
	web = {web: false, th: false, prev: new Point()}, wndMnuTxt;
	xpBottles = {isThrowing: false, pos: new Point()};
Block.OPAQUE_TILES = /^(1|2|3|4|5|7|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|29|33|34|35|41|42|43|44|45|46|47|48|49|52|53|54|56|57|58|60|61|62|64|65|67|71|73|74|79|80|81|82|84|85|86|87|88|89|91|92|93|94|95|96|97|98|99|100|101|102|103|106|107|108|109|110|111|112|113|114|116|117|118|120|121|122|123|124|125|126|127|128|129|130|133|134|135|136|137|138|139|140|144|145|146|149|150|151|152|153|154|155|156|158|159|160|161|162|163|164|165|166|167|168|170|171|172|173|174|178|179|180|181|182|183|184|185|186|187|188|189|190|191|192|193|194|195|196|197|198|200|201|202|203|204|205|206|207|208|210|211|212|213|214|215|216|217|218|219|220|221|222|223|224|225|226|227|228|229|230|231|232|233|234|235|236|237|238|239|240|241|243|245|246|247|248|249|250|251|252|253|254|255)$/,
	Entity.be = {ents: [], types: []}, Entity.canRide = false, Entity.canSel = false, Entity.efv = {e: -1, effects: []}, Entity.lockEffects = {effects: [], showParticle: true}, Entity.rider = -1, Entity.riding = -1, Entity.sel = {ents: []},
	Item.insoluble = false,
	Level.destrocksByMock = {cd: 0, threads: []},
	ModPE.camera = -1, ModPE.lockMextToTrot = false, ModPE.showTime = 0, ModPE.stim = !TMI, ModPE.wndLeaveGame, ModPE.wndTipMsg,
	Player.ACCELERATION = 0.07840000092983246, Player.insoluble = "|";

function addItem(player, left) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytId = new android.widget.LinearLayout(CTX);
	layout.addView(lytId);
	var edtId = new android.widget.EditText(CTX);
	edtId.setText("57");
	edtId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtId);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	lytId.addView(text);
	var edtDamage = new android.widget.EditText(CTX);
	edtDamage.setText("0");
	edtDamage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtDamage);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText());
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtId.setText(view.getText().split("\n")[0].split(":")[0]);
				edtDamage.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[0]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var text = new android.widget.TextView(CTX);
	text.setText("数量");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytAmount = new android.widget.LinearLayout(CTX);
	layout.addView(lytAmount);
	var edtAmount = new android.widget.EditText(CTX);
	edtAmount.setText("1");
	edtAmount.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	lytAmount.addView(edtAmount);
	var text = new android.widget.TextView(CTX);
	text.setText("个");
	lytAmount.addView(text);
	var sekAmount = new android.widget.SeekBar(CTX);
	sekAmount.setMax(256);
	sekAmount.setProgress(1 + 1);
	sekAmount.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
		edtAmount.setText(String(sekAmount.getProgress() - 1));
	}}));
	layout.addView(sekAmount);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (player == getPlayerEnt())
			addItemInventory(edtId.getText(), edtAmount.getText(), edtDamage.getText()); else Level.dropItem(Entity.getX(player), Entity.getY(player), Entity.getZ(player), 0, edtId.getText(), edtAmount.getText(), edtDamage.getText());
		wndAddItems.dismiss();
		if (left == 1) {
			wndInv.dismiss();
			inv.inv();
		}
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndAddItems = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndAddItems.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndAddItems.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * left, 0);
}

function addPlayer(player) {
	for (var p in list) if (list[p] == player) return;
	list.push(player);
	preventDefault();
}

function antiduowan() {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("Useful\ncommands");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("V" + VERSION);
	layout.addView(text);
	if (isInGame) {
		var button = new android.widget.Button(CTX);
		button.setText("玩家");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Player.player();
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("游戏");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			game();
		}}));
		layout.addView(button);	
		var button = new android.widget.Button(CTX);
		button.setText((inv.dontGetItame ? "[防止出错] " : "") + ModPE.getI18n("container.inventory"));
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			inv.inv();
		}}));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			inv.dontGetItame = !inv.dontGetItame;
			wndMnu.dismiss();
			antiduowan();
			return true;
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("管理玩家");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Player.players();
		}}));
		layout.addView(button);
		if (lan) {
			var button = new android.widget.Button(CTX);
			button.setText(ModPE.getI18n("container.enchant"));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				Ench.ench(Player.getSelectedSlotId(), 0);
			}}));
			layout.addView(button);
		}
		var button = new android.widget.Button(CTX);
		button.setText("效果");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.effect(getPlayerEnt());
		}}));
		layout.addView(button);
		if (pe) {
			var button = new android.widget.Button(CTX);
			button.setText("快速建造");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				quickBuilding.build();
			}}));
			layout.addView(button);
		}
		var button = new android.widget.Button(CTX);
		button.setText("实体");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.ent();
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("记彔点");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			ports.pm();
		}}));
		layout.addView(button);
	}
	if (TMI) {
		var button = new android.widget.Button(CTX);
		button.setText("屛幕截图");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			ModPE.screenshot();
		}}));
		layout.addView(button);
	}
	var button = new android.widget.Button(CTX);
	button.setText("快速计算器");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		calc.calc();
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("快速浏览器");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		webView("http://www.baidu.com/");
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("JS 设定");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		popupWindow();
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("\u5173\u4e8e");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		credits();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	wndMnu = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndMnu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndMnu.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
}

function argbToRgb(color) {
	return (color - Int.MIN_VALUE) % 0x1000000;
}

function attackHook(attacker, victim) {
	if (Target.automatic && Target.attackable) if (/^(-1|0)$/.test(Target.ent) && new RegExp(Target.regExp, "i".string(Target.i)).test(Entity.getNameTag(victim))) {
		Target.setTarget(victim);
		preventDefault();
	}
	if (Entity.canSel) if (("," + Entity.sel.ents.join() + ",").indexOf("," + victim + ",") == -1) {
		Entity.sel.ents.push(victim);
		preventDefault();
	}
	if (sp) {
		ModPE.scor(victim, true);
		preventDefault();
	}
	if (pe) {
		if (atapil) if (Player.isPlayer(victim)) addPlayer(victim);
		for (var p in nvtm) if (nvtm[p] == attacker) preventDefault();
		if (attacker == Entity.efv.e) for (var e in Entity.efv.effects) Entity.addEffect(victim, Entity.efv.effects[e].type, Entity.efv.effects[e].t, Entity.efv.effects[e].lvl, TMI, !TMI);
		if (hbr.hbr && getCarriedItem() == 369) Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 93);
	}
	if (Entity.canRide) {
		if (pe) {
			if (/^(-1|0)$/.test(Entity.rider)) {
				Entity.rider = victim;
				print("\n已设置实体 rider = " + victim);
			} else {
				rideAnimal(Entity.rider, victim);
				Entity.rider = -1;
				print("\n已设置实体 riding = " + victim);
			}
		} else rideAnimal(attacker, victim);
		preventDefault();
	}
}

bi.add = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytId = new android.widget.LinearLayout(CTX);
	layout.addView(lytId);
	var edtId = new android.widget.EditText(CTX);
	edtId.setText("46");
	edtId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtId);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	lytId.addView(text);
	var edtDamage = new android.widget.EditText(CTX);
	edtDamage.setHint("选填");
	edtDamage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtDamage);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText());
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtId.setText(view.getText().split("\n")[0].split(":")[0]);
				if (view.getText().split("\n")[0].split(":")[1] != 0) edtDamage.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[lytResults.length - 1]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const ID = edtId.getText() + ":" + edtDamage.getText();
		if (("," + bi.items.join() + ",").indexOf("," + ID + ",") == -1) bi.items.push(ID);
		wndAddBi.dismiss();
		wndBi.dismiss();
		bi.bi();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndAddBi = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndAddBi.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndAddBi.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * 2, 0);
}

bi.bi = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("长按以刪除");
	layout.addView(text);
	var scroll = new android.widget.ScrollView(CTX);
	layout.addView(scroll);
	var lytItems = new android.widget.LinearLayout(CTX);
	lytItems.setOrientation(lytItems.VERTICAL);
	scroll.addView(lytItems);
	var button = new android.widget.Button(CTX);
	button.setText("+\n");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		bi.add();
	}}));
	lytItems.addView(button);
	for (var i in bi.items) {
		var button = new android.widget.Button(CTX);
		button.setText(bi.items[i] + "\n" + Item.getName(bi.items[i].split(":")[0], bi.items[i].split(":")[1]));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			for (var i in bi.items) if (bi.items[i] == (view.getText()).split("\n")[0]) bi.items.splice(i, 1);
			wndBi.dismiss();
			bi.bi();
			return true;
		}}));
		lytItems.addView(button);
	}
	wndBi = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndBi.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndBi.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

calc.calc = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var edtExp = new android.widget.EditText(CTX);
	edtExp.setText(calc.prev);
	layout.addView(edtExp);
	button = new android.widget.Button(CTX);
	button.setText("Return");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		try {
			txtReturn.setText(String(eval(String(edtExp.getText()))));
		}
		catch (err) {
			txtReturn.setText("Error: " + err);
		}
		calc.prev = edtExp.getText();
	}}));
	layout.addView(button);
	var txtReturn = new android.widget.TextView(CTX);
	txtReturn.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
		CTX.getSystemService(CTX.CLIPBOARD_SERVICE).setText(txtReturn.getText());
		print("\n已复制");
		return true;
	}}));
	layout.addView(txtReturn);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH * 3, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

chat.load = function () {
	var layout = new android.widget.LinearLayout(CTX);
	var button = new android.widget.Button(CTX);
	button.setText("使用 android 介面发送聊天");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		var layout = new android.widget.LinearLayout(CTX);
		layout.setOrientation(layout.VERTICAL);
		var edtChat = new android.widget.EditText(CTX);
		edtChat.setText(chat.prev);
		layout.addView(edtChat);
		var button = new android.widget.Button(CTX);
		button.setText("→");
		button.setLayoutParams(TEXT_PARAMS);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Server.sendChat(edtChat.getText());
			chat.prev = edtChat.getText();
		}}));
		layout.addView(button);
		var scroll = new android.widget.ScrollView(CTX);
		scroll.addView(layout);
		var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH * 3, Wnd.HEIGHT * 3, true);
		window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
		window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
	}}));
	layout.addView(button);
	chat.window = new android.widget.PopupWindow(layout, Wnd.WIDTH * 3, Wnd.HEIGHT / 2);
	chat.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
}

function continueDestroyBlock(x, y, z, side, progress) {
	Scenter.showNearestOre();
}

function credits() {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("\x42\x79\x20\x4d\x49\x53\x54\x45\x52\x5f\x43\x48\x41\x4e\n" +
		"\u767e\u5ea6\x20\x49\x44\x3a\x20\x4c\x31\x38\x39\x32\x39\x35\x36\x37\x36\x35\x34\n" +
		eval("\x55\x50\x44\x41\x54\x45\x53"));
	layout.addView(text);
	var button = new android.widget.Button(CTX);
	button.setText("\u5e38\u7528\u529f\u80fd");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		eval("\x73\x68\x6f\x77\x55\x73\x65\x66\x75\x6c\x43\x6f\x6d\x6d\x61\x6e\x64\x73\x28\x29\x3b");
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("\u68c0\u67e5\u66f4\u65b0");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		webView("ht和tp:/谐/p和an.b谐aid和u.c谐om/s/1nvhJ9Uh".replace(/[和谐]/g, ""));
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("\u53cd\u9988\u4e0e\u5efa\u8bae");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		webView("ht和tp:/谐/ti和eba.b谐aid和u.c谐om/p/4755088955?share=9105&fr=share&see_lz=0".replace(/[和谐]/g, ""));
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH * 3, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

ctrller.load = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var button = new android.widget.Button(CTX);
	button.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (view, event) {
		switch (event.getAction()) {
			case event.ACTION_DOWN:
				ctrller.velY = 16;
				break;
			case event.ACTION_UP:
				ctrller.velY = 0;
				break;
		}
		return false;
	}}));
	button.setText("↑");
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (view, event) {
		switch (event.getAction()) {
			case event.ACTION_DOWN:
				ctrller.velY = -16;
				break;
			case event.ACTION_UP:
				ctrller.velY = 0;
				break;
		}
		return false;
	}}));
	button.setText("↓");
	layout.addView(button);
	ctrller.window = new android.widget.PopupWindow(layout, Wnd.WIDTH / 2, Wnd.HEIGHT);
	ctrller.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
}

function deathHook(murderer, victim) {
	died = true;
	if (victim == getPlayerEnt()) {
		if (ld.rec) ld.pos = new Point(getPlayerX(), getPlayerY() + 1, getPlayerZ());
		if (ki.ki) ki.keep("w");
	}
}

function destroyBlock(x, y, z, side) {
	const ID = getTile(x, y, z), DATA = Level.getData(x, y, z);
	if (treeCapitator) tree: {
		if (!/^(17|162)$/.test(ID)) break tree;
		var yf = 0;
		root: for (var t = y; t >= 0; t--) switch (getTile(x, t, z)) {
			case 17: case 162: break;
			case 2: case 3: break root;
			default: break tree;
		}
		roof: for (var f = y; f < 128; f++) switch (getTile(x, f, z)) {
			case 17: case 162: break;
			case 18: case 161:
				yf = f;
				break roof;
			default: break tree;
		}
		const ROOF_ID = getTile(x, yf, z);
		var index = Level.destrocksByMock.threads.length;
		Level.destrocksByMock.threads.push({plokad: {pos: new Point(x, t + 1, z), id: 6, data: DATA + (ID == 162 ? 4 : 0)}, tiles: []});
		new java.lang.Thread(new java.lang.Runnable({run: function () {
			veinMiner.mine(x, y, z, ID, undefined, index, true);
			veinMiner.mined = 0;
			veinMiner.mine(x, yf, z, ROOF_ID, undefined, index, true);
			veinMiner.mined = 0;
		}})).start();
	}
	if (veinMiner.veinMiner) if (("," + veinMiner.ores.join() + ",").search("," + ID + ":(" + DATA + "|),") > -1) {
		var index = Level.destrocksByMock.threads.length;
		Level.destrocksByMock.threads.push({tiles: []});
		new java.lang.Thread(new java.lang.Runnable({run: function () {
			veinMiner.mine(x, y, z, ID, DATA, index, true);
			veinMiner.mined = 0;
		}})).start();
	}
	if (quickBuilding.linear.canDestroy) {
		var t = eval(quickBuilding.linear.direction.charAt(0));
		const END = eval("t " + quickBuilding.linear.direction.slice(-1) + " " + quickBuilding.linear.length);
		for (t; quickBuilding.linear.direction.slice(-1) == "-" ? t > END : t < END; eval("t " + quickBuilding.linear.direction.slice(-1) + "= " + quickBuilding.linear.step)) {
			var xt = quickBuilding.linear.direction.charAt(0) == "x" ? t : x, yt = quickBuilding.linear.direction.charAt(0) == "y" ? t : y, zt = quickBuilding.linear.direction.charAt(0) == "z" ? t : z;
			if (!quickBuilding.linear.ratt || getTile(xt, yt, zt) == quickBuilding.linear.fid && Level.getData(xt, yt, zt) == quickBuilding.linear.fata) Level.destrockBySwitching(xt, yt, zt, true);
		}
	}
}

function dipToPx(dips) {
	return Math.ceil(dips * CTX.getResources().getDisplayMetrics().density);
}

Ench.bestEnches = function (itemId) {
	var eid = "";
	switch (itemId) {
		case 298: case 302: case 306: case 310: case 314: eid = "0 5 6 17"; break; // 头盔
		case 299: case 303: case 307: case 311: case 315: eid = "0 5 17"; break; // 胸甲
		case 300: case 304: case 308: case 312: case 316: eid = "0 5 17"; break; // 护腿
		case 301: case 305: case 309: case 313: case 317: eid = "2 5 7 17"; break; // 靴
		case 267: case 268: case 272: case 276: case 283: eid = "9 13 17"; break; // 剑
		case 256: case 269: case 273: case 277: case 284: eid = "15 17"; break; // 铲
		case 257: case 270: case 274: case 278: case 285: eid = "15 17"; break; // 镐
		case 258: case 271: case 275: case 279: case 286: eid = "9 15 17"; break; // 斧
		case 259: case 290: case 291: case 292: case 293: case 294: case 398: case 444: eid = "17"; break; // 打火石 锄 萝卜钓竿 滑翔翅
		case 359: eid = "15 17"; break; // 剪刀
		case 261: eid = "17 19 20 21 22"; break; // 弓
		case 346: eid = "17 23 24"; break; // 钓竿
		case 340: case 403: eid = "0 5 6 7 9 13 15 17 19 20 21 22 23 24"; break; // 书
	}
	if (eid != undefined) return eid.split(" ");
}

Ench.canEnch = function (itemId, enchId) {
	var eid = "";
	switch (itemId) {
		case 298: case 302: case 306: case 310: case 314: eid = "0|1|3|4|5|6|8|17"; break; // 头盔
		case 299: case 303: case 307: case 311: case 315: eid = "0|1|3|4|5|17"; break; // 胸甲
		case 300: case 304: case 308: case 312: case 316: eid = "0|1|3|4|5|17"; break; // 护腿
		case 301: case 305: case 309: case 313: case 317: eid = "0|1|2|3|4|5|7|17"; break; // 靴
		case 267: case 268: case 272: case 276: case 283: eid = "9|10|11|12|13|14|17"; break; // 剑
		case 256: case 269: case 273: case 277: case 284: eid = "15|16|17|18"; break; // 铲
		case 257: case 270: case 274: case 278: case 285: eid = "15|16|17|18"; break; // 镐
		case 258: case 271: case 275: case 279: case 286: eid = "9|10|11|15|16|17|18"; break; // 斧
		case 259: case 290: case 291: case 292: case 293: case 294: case 398: case 444: eid = "17"; break; // 打火石 锄 萝卜钓竿 滑翔翅
		case 359: eid = "15|16|17"; break; // 剪刀
		case 261: eid = "17|19|20|21|22"; break; // 弓
		case 346: eid = "17|23|24"; break; // 钓竿
		case 340: case 403: eid = "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24"; break; // 书 附魔书
	}
	return new RegExp("^(" + eid + ")$").test(enchId);
}

Ench.ench = function (slotId) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	if (Ench.bestEnches(Player.getInventorySlot(slotId)) != "") {
		var horizontalScroll = new android.widget.HorizontalScrollView(CTX);
		layout.addView(horizontalScroll);
		var lytCtrl = new android.widget.LinearLayout(CTX);
		horizontalScroll.addView(lytCtrl);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			for (var e in chkEnches) try {
				if (chkEnches[e].isChecked()) Player.enchant(slotId, e, edtEnches[e].getText());
			}
			catch (err) {
			}
		}}));
		lytCtrl.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("最佳附魔");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			if (chkEnches.length > 0) try {
				for (var e in chkEnches) chkEnches[e].setChecked(false);
				var eids = Ench.bestEnches(Player.getInventorySlot(slotId));
				if (eids != "") for (e in eids) chkEnches[eids[e]].setChecked(true);
			}
			catch (err) {
			}
		}}));
		lytCtrl.addView(button);
		if (!TMI) {
			var button = new android.widget.Button(CTX);
			button.setText("移除");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				const CN = Player.getItemCustomName(slotId), ENCHES = Player.getEnchantments(slotId);
				Player.setInventorySlot(slotId, Player.getInventorySlot(slotId), Player.getInventorySlotCount(slotId), Player.getInventorySlotData(slotId));
				if (CN != null && CN != "") Player.setItemCustomName(slotId, CN);
				for (var e in ENCHES) try {
					if (!chkEnches[ENCHES[e].type].isChecked()) Player.enchant(slotId, ENCHES[e].type, ENCHES[e].level);
				}
				catch (err) {
				}
			}}));
			lytCtrl.addView(button);
		}
		var button = new android.widget.Button(CTX);
		button.setText("移除所有");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			const CN = Player.getItemCustomName(slotId);
			Player.setInventorySlot(slotId, Player.getInventorySlot(slotId), Player.getInventorySlotCount(slotId), Player.getInventorySlotData(slotId));
			if (CN != null && CN != "") Player.setItemCustomName(slotId, CN);
		}}));
		lytCtrl.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("等级取値 " + Short.MIN_VALUE + "级 ~ " + Short.MAX_VALUE + "级");
		layout.addView(text);
		var lytEnches = new android.widget.LinearLayout(CTX);
		lytEnches.setOrientation(lytEnches.VERTICAL);
		var chkEnches = [], edtEnches = [];
		for (e = 0; e <= 24; e++) if (Ench.canEnch(Player.getInventorySlot(slotId), e)) {
			var lytEnch = new android.widget.LinearLayout(CTX);
			lytEnches.addView(lytEnch);
			chkEnches[e] = new android.widget.CheckBox(CTX);
			chkEnches[e].setText(e + " " + Ench.getName(e));
			chkEnches[e].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
				if (checked) {
					const OPT_ENCHES = Ench.optEnches(Player.getInventorySlot(slotId), view.getText().split(" ")[0]);
					for (var i in OPT_ENCHES) if (chkEnches[OPT_ENCHES[i]] != undefined) chkEnches[OPT_ENCHES[i]].setChecked(false);
					if (/^(14|18)$/.test(view.getText().split(" ")[0])) print("\n等级不宜过高");
				}
			}}));
			lytEnch.addView(chkEnches[e]);
			edtEnches[e] = new android.widget.EditText(CTX);
			edtEnches[e].setText(String(Short.MAX_VALUE));
			edtEnches[e].setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			lytEnch.addView(edtEnches[e]);
		}
		var sclEnches = new android.widget.ScrollView(CTX);
		sclEnches.addView(lytEnches);
		layout.addView(sclEnches);
	} else {
		var text = new android.widget.TextView(CTX);
		text.setText("请先选定装备或工具");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
	}
	var window = new android.widget.PopupWindow(layout, Wnd.WIDTH * 2, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

Ench.getName = function (id) {
	const NAME = ["protect.all", "protect.fire", "protect.fall", "protect.explosion", "protect.projectile", "thorns", "oxygen", "waterWalker", "waterWorker", "damage.all", "damage.undead", "damage.arthropods", "knockback", "fire", "lootBonus", "digging", "untouching", "durability", "lootBonusDigger", "arrowDamage", "arrowKnockback", "arrowFire", "arrowInfinite", "lootBonusFishing", "fishingSpeed"];
	if (NAME[id] == undefined) return "";
	return ModPE.getI18n("enchantment." + NAME[id]);
}

Ench.optEnches = function (itemId, enchId) {
	var eid = "";
	switch (itemId) {
		case 298: case 302: case 306: case 310: case 314:
			if (/^(0|1|3|4)$/.test(enchId)) eid = "0|1|3|4"; else if (/^(6|8)$/.test(enchId)) eid = "6|8";
			break; // 头盔
		case 299: case 303: case 307: case 311: case 315: eid = "0|1|3|4"; break; // 胸甲
		case 300: case 304: case 308: case 312: case 316: eid = "0|1|3|4"; break; // 护腿
		case 301: case 305: case 309: case 313: case 317: eid = "0|1|2|3|4"; break; // 靴
		case 267: case 268: case 272: case 276: case 283: eid = "9|10|11"; break; // 剑
		case 256: case 269: case 273: case 277: case 284: eid = "16|18"; break; // 铲
		case 257: case 270: case 274: case 278: case 285: eid = "16|18"; break; // 镐
		case 258: case 271: case 275: case 279: case 286:
			if (/^(9|10|11)$/.test(enchId)) eid = "9|10|11"; else if (/^(16|18)$/.test(enchId)) eid = "16|18";
			break; // 斧
		case 340: case 403:
			if (/^(0|1|2|3|4)$/.test(enchId)) eid = "0|1|2|3|4";
			else if (/^(6|8)$/.test(enchId)) eid = "6|8";
			else if (/^(9|10|11)$/.test(enchId)) eid = "9|10|11";
			else if (/^(16|18)$/.test(enchId)) eid = "16|18";
			break; // 书 附魔书
	}
	if (!new RegExp("^(" + eid + ")$").test(enchId)) return "";
	eid = eid.replace(enchId, "").replace(/(^\|)|(\|$)/, "").replace(/\|\|/, "|");
	return eid.split("|");
}

Entity.be.ban = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var button = new android.widget.Button(CTX);
	button.setText("反选");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		for (var e in chkEnts) try {
			chkEnts[e].setChecked(!chkEnts[e].isChecked());
		}
		catch (err) {
		}
	}}));
	layout.addView(button);
	var lytEnts = new android.widget.LinearLayout(CTX);
	lytEnts.setOrientation(lytEnts.VERTICAL);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(lytEnts);
	layout.addView(scroll);
	var chkEnts = [];
	for (e = 10; e <= 101; e++) if (Entity.getName(e) != "") {
		chkEnts[e] = new android.widget.CheckBox(CTX);
		chkEnts[e].setText(e + " " + Entity.getName(e));
		chkEnts[e].setChecked(("," + Entity.be.types.join() + ",").indexOf("," + e + ",") > -1);
		chkEnts[e].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) Entity.be.types.push(view.getText().split(" ")[0]); else for (var ent in Entity.be.types) if (Entity.be.types[ent] ==  view.getText().split(" ")[0]) Entity.be.types.splice(ent, 1);
		}}));
		lytEnts.addView(chkEnts[e]);
	}
	var window = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Entity.effect = function (entity) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var hslCtrl = new android.widget.HorizontalScrollView(CTX);
	layout.addView(hslCtrl);
	var lytCtrl = new android.widget.LinearLayout(CTX);
	hslCtrl.addView(lytCtrl);
	var chkLocked = {isChecked: function () {
		return false;
	}};
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (pe) if (chkEfv.isChecked()) Entity.efv = {e: entity, effects: []};
		var showParticle = true;
		if (lan) showParticle = chkParticle.isChecked();
		if (chkLocked.isChecked()) Entity.lockEffects = {effects: [], showParticle: showParticle};
		for (var e in chkEffects) try {
			if (chkEffects[e].isChecked()) {
				if (lan) if (chkEfv.isChecked()) Entity.efv.effects.push({lvl: edtLvl[e].getText() - 1, t: edtSeconds[e].getText() * 20, type: e});
				if (chkLocked.isChecked()) Entity.lockEffects.effects.push({lvl: edtLvl[e].getText() - 1, type: e}); else Entity.addEffect(entity, e, (edtMin[e].getText() * 60 + edtSec[e].getText() * 1) * 20, edtLvl[e].getText() - 1, TMI * showParticle, (1 - TMI) * showParticle);
			}
		}
		catch (err) {
		}
	}}));
	lytCtrl.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("移除");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		try {
			for (var e in chkEffects) if (chkEffects[e].isChecked()) Entity.removeEffect(entity, e);
			for (e in Entity.lockEffects.effects) if (chkEffects[Entity.lockEffects.effects[e].type].isChecked()) Entity.lockEffects.effects.splice(e, 1);
		}
		catch (err) {
		}
	}}));
	lytCtrl.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("移除所有");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (pe) Entity.removeAllEffects(entity); else for (var e in chkEffects) Entity.removeEffect(entity, e);
		Entity.lockEffects.effects = [];
	}}));
	lytCtrl.addView(button);
	var hslChks = new android.widget.HorizontalScrollView(CTX);
	layout.addView(hslChks);
	var lytChks = new android.widget.LinearLayout(CTX);
	hslChks.addView(lytChks);
	if (pe) {
		var chkEfv = new android.widget.CheckBox(CTX);
		chkEfv.setText("效果用于攻击");
		lytChks.addView(chkEfv);
	}
	if (lan) {
		var chkParticle = new android.widget.CheckBox(CTX);
		chkParticle.setText("粒子可见");
		chkParticle.setChecked(true);
		lytChks.addView(chkParticle);
	}
	if (entity == getPlayerEnt()) {
		chkLocked = new android.widget.CheckBox(CTX);
		chkLocked.setText("锁定");
		lytChks.addView(chkLocked);
	}
	var text = new android.widget.TextView(CTX);
	text.setText("持续时间取値 0:0 ~ " + Math.floor(Int.MAX_VALUE / 20 / 60) + ":" + Math.ceil(Int.MAX_VALUE / 20 % 60 * 100) / 100 + "\n" +
		"等级取値 " + (Int.MIN_VALUE + 1) + "级 ~ " + (Int.MAX_VALUE + 1) + "级 不宜过高");
	layout.addView(text);
	var lytEffects = new android.widget.LinearLayout(CTX);
	lytEffects.setOrientation(lytEffects.VERTICAL);
	const IS_BUFF = [, -11184641, -43691, -11184641, -43691, -11184641, -11184641, -43691, -11184641, -43691, -11184641, -11184641, -11184641, -11184641, -11184641, -43691, -11184641, -43691, -43691, -43691, -43691, -11184641, -11184641, -11184641, -43691];
	var chkEffects = [], edtLvl = [], edtMin = [], edtSec = [];
	for (e = 1; e <= 24; e++) {
		var canHave = /^(3|4|8|9|15|16|24)$/.test(e), lytEffect = new android.widget.LinearLayout(CTX);
		if (pe || canHave) {
			chkEffects[e] = new android.widget.CheckBox(CTX);
			chkEffects[e].setText(e + " " + Entity.getEffectName(e));
			chkEffects[e].setTextColor(IS_BUFF[e]);
			lytEffect.addView(chkEffects[e]);
			edtLvl[e] = new android.widget.EditText(CTX);
			edtLvl[e].setText("128");
			edtLvl[e].setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			lytEffect.addView(edtLvl[e]);
			var text = new android.widget.TextView(CTX);
			text.setText("时间");
			lytEffect.addView(text);
			edtMin[e] = new android.widget.EditText(CTX);
			edtMin[e].setText("1789569");
			edtMin[e].setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
			lytEffect.addView(edtMin[e]);
			var text = new android.widget.TextView(CTX);
			text.setText(":");
			lytEffect.addView(text);
			edtSec[e] = new android.widget.EditText(CTX);
			edtSec[e].setText("42.35");
			edtSec[e].setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
			lytEffect.addView(edtSec[e]);
			lytEffects.addView(lytEffect);
		}
	}
	var sclEffects = new android.widget.ScrollView(CTX);
	sclEffects.addView(lytEffects);
	layout.addView(sclEffects);
	var window = new android.widget.PopupWindow(layout, Wnd.WIDTH * 2, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

Entity.ent = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	if (lan) {
		var button = new android.widget.Button(CTX);
		button.setText("生成");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.spawn(getPlayerX(), getPlayerY(), getPlayerZ(), 1);
		}}));
		layout.addView(button);
	}
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("移除");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.rmvMnu();
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("禁止生成");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.be.ban();
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("扫地");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.sweeepTheFloor();
		}}));
		layout.addView(button);
	}
	var button = new android.widget.Button(CTX);
	button.setText("选定");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Entity.sel.showEnts();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	wndEnt = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndEnt.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndEnt.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

Entity.getEffectName = function (id) {
	const NAME = [, "moveSpeed", "moveSlowdown", "digSpeed", "digSlowDown", "damageBoost", "heal", "harm", "jump", "confusion", "regeneration", "resistance", "fireResistance", "waterBreathing", "invisibility", "blindness", "nightVision", "hunger", "weakness", "poison", "wither", "healthBoost", "absorption", "saturation", "levitation"];
	if (NAME[id] == undefined) return "";
	return ModPE.getI18n("potion." + NAME[id]);
}

Entity.getName = function (id) {
	const NAME = [, , , , , , , , , , "entity.Chicken.name", "entity.Cow.name", "entity.Pig.name", "entity.Sheep.name", "entity.Wolf.name", "entity.Villager.name", "entity.MushroomCow.name", "entity.Squid.name", "entity.Rabbit.name", "entity.Bat.name", "entity.IronGolem.name", "entity.SnowMan.name", "entity.Ocelot.name", "entity.horse.name", "entity.donkey.name", "entity.mule.name", "entity.skeletonhorse.name", "entity.zombiehorse.name", "entity.PolarBear.name", , , , "entity.Zombie.name", "entity.Creeper.name", "entity.Skeleton.name", "entity.Spider.name", "entity.PigZombie.name", "entity.Slime.name", "entity.Enderman.name", "entity.Silverfish.name", "entity.CaveSpider.name", "entity.Ghast.name", "entity.LavaSlime.name", "entity.Blaze.name", "entity.ZombieVillager.name", "entity.Witch.name", "entity.Stray.name", "entity.Husk.name", "entity.WitherSkeleton.name", "entity.Guardian.name", "entity.ElderGuardian.name", , "entity.WitherBoss.name", "entity.EnderDragon.name", "潜影贝", "entity.Endermite.name", , , , , , , , "玩家", "entity.Item.name", "entity.PrimedTnt.name", "entity.FallingSand.name", , "item.experience_bottle.name", "entity.XPOrb.name", "item.ender_eye.name", "item.end_crystal.name", , , , , "潜影贝子弹", "鱼钩", , "entity.EnderDragon.name entity.Fireball.name", "entity.Arrow.name", "entity.Snowball.name", "item.egg.name", "entity.Painting.name", "entity.Minecart.name", "entity.Fireball.name", "potion.prefix.grenade entity.ThrownPotion.name", "item.ender_pearl.name", "item.lead.name 结", "entity.WitherBoss.name item.skull.char.name", "entity.Boat.name", , , "闪电", "entity.SmallFireball.name", "效果区域云", "item.hopper_minecart.name", "item.tnt_minecart.name", "item.chest_minecart.name", , "item.minecartCommandBlock.name", "potion.prefix.linger entity.ThrownPotion.name"];
	if (NAME[id] == undefined) return "";
	var i18n = "", name = "", words = NAME[id].split(" ");
	for (var s in words) {
		i18n = ModPE.getI18nEx(words[s], s > 0, s < words.length - 1);
		name += /^ *$/.test(i18n) ? words[s] : i18n;
	}
	return name;
}

Entity.rmvMnu = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const E = Entity.getAll();
		for (var e in E) try {
			if (chkEnts[Entity.getEntityTypeId(E[e])].isChecked() && E[e] != getPlayerEnt()) Entity.remove(E[e]);
		}
		catch (err) {
		}
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("反选");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		for (var e in chkEnts) try {
			chkEnts[e].setChecked(!chkEnts[e].isChecked());
		}
		catch (err) {
		}
	}}));
	layout.addView(button);
	var lytEnts = new android.widget.LinearLayout(CTX);
	lytEnts.setOrientation(lytEnts.VERTICAL);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(lytEnts);
	layout.addView(scroll);
	var chkEnts = [];
	for (e = 10; e <= 101; e++) if (Entity.getName(e) != "") {
		chkEnts[e] = new android.widget.CheckBox(CTX);
		chkEnts[e].setText(e + " " + Entity.getName(e));
		lytEnts.addView(chkEnts[e]);
	}
	var window = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Entity.ride = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Entity.canRide);
	checkbox.setText((pe ? "依次" : "") + "点击实体骑行");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Entity.canRide = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("设置自己为");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("骑行者");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.rider = getPlayerEnt();
			print("\n已设置实体 rider = " + getPlayerEnt());
		}}));
		layout.addView(button);
	}
	var button = new android.widget.Button(CTX);
	button.setText("被骑者");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (pe) {
			if (/^(-1|0)$/.test(Entity.rider)) print("\n无骑行者"); else {
				rideAnimal(Entity.rider, getPlayerEnt());
				Entity.rider = -1;
				print("\n已设置实体 riding = " + getPlayerEnt());
			}
		} else rideAnimal(getPlayerEnt(), getPlayerEnt());
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Entity.sel.add = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("标识码");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtEnt = new android.widget.EditText(CTX);
	edtEnt.setText("0");
	edtEnt.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtEnt);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (("," + Entity.sel.ents.join() + ",").indexOf("," + edtEnt.getText() + ",") == -1) Entity.sel.ents.push(Number(edtEnt.getText()));
		wndAddEnt.dismiss();
		wndEnts.dismiss();
		Entity.sel.showEnts();
	}}));
	layout.addView(button);
	wndAddEnt = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndAddEnt.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndAddEnt.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * 2, 0);
}

Entity.sel.controlPlayer = function () {	
	entroller.ent = -1;
	if (!isNaN(entroller.pos.x) && !isNaN(entroller.pos.y) && !isNaN(entroller.pos.z)) {
		setPosition(getPlayerEnt(), entroller.pos.x, entroller.pos.y, entroller.pos.z);
		entroller.pos = new Point();
	}
	ModPE.scor(getPlayerEnt());
	Entity.setImmobile(entroller.ent, false);
}

Entity.sel.ent = function (entity) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	if (!pe) {
		var text = new android.widget.TextView(CTX);
		text.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function () {
			CTX.getSystemService(CTX.CLIPBOARD_SERVICE).setText(Entity.getNameTag(entity));
			print("\n已复制");
			return true;
		}}));
		text.setText(android.text.Html.fromHtml(Entity.getNameTag(entity).toHtml()));
		layout.addView(text);
	}
	var text = new android.widget.TextView(CTX);
	text.setText("标识码");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText(String(entity));
	text.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function () {
		CTX.getSystemService(CTX.CLIPBOARD_SERVICE).setText(String(entity));
		print("\n已复制");
		return true;
	}}));
	layout.addView(text);
	if (pe) {
		var text = new android.widget.TextView(CTX);
		text.setText("命名");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var edtNt = new android.widget.EditText(CTX);
		if (entity != -1) edtNt.setText(String(Entity.getNameTag(entity)));
		edtNt.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			Entity.setNameTag(entity, s);
		}}));
		edtNt.setLayoutParams(TEXT_PARAMS);
		layout.addView(edtNt);
		var button = new android.widget.Button(CTX);
		button.setText("§");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			edtNt.setText(edtNt.getText().toString().slice(0, edtNt.getSelectionStart()) + "§" + edtNt.getText().toString().slice(edtNt.getSelectionEnd()));
		}}));
		layout.addView(button);
	}
	var button = new android.widget.Button(CTX);
	button.setText("传送");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Player.tp2p(entity);
	}}));
	layout.addView(button);
	if (pe) {
		if (Entity.getEntityTypeId(entity) < 64) {
			var text = new android.widget.TextView(CTX);
			text.setText("生命値 (HP)");
			text.setTextSize(text.getTextSize());
			layout.addView(text);
			var text = new android.widget.TextView(CTX);
			text.setText("取値 0 ~ " + Int.MAX_VALUE);
			layout.addView(text);
			var lytHp = new android.widget.LinearLayout(CTX);
			layout.addView(lytHp);
			var edtHp = new android.widget.EditText(CTX);
			edtHp.setText(String(Entity.getHealth(entity)));
			edtHp.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			lytHp.addView(edtHp);
			var text = new android.widget.TextView(CTX);
			text.setText("/ " + Entity.getMaxHealth(entity) + "条");
			lytHp.addView(text);
			var button = new android.widget.Button(CTX);
			button.setText("OK");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				try {
					if (Entity.getMaxHealth(entity) < edtHp.getText()) Entity.setMaxHealth(entity, edtHp.getText());
					if (!Player.isPlayer(entity) || edtHp.getText() > 0) Entity.setHealth(entity, edtHp.getText());
				}
				catch (err) {
				}
			}}));
			layout.addView(button);
			var button = new android.widget.Button(CTX);
			button.setText(ModPE.getI18n("potion.harm"));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				Entity.setHealth(entity, 0);
				edtHp.setText("0");
			}}));
			layout.addView(button);
			var button = new android.widget.Button(CTX);
			button.setText(ModPE.getI18n("potion.heal"));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				const MH = Entity.getMaxHealth(entity);
				Entity.setHealth(entity, MH);
				edtHp.setText(String(MH));
			}}));
			layout.addView(button);
			var text = new android.widget.TextView(CTX);
			text.setText("最大生命値");
			text.setTextSize(text.getTextSize());
			layout.addView(text);
			var text = new android.widget.TextView(CTX);
			text.setText("取値 0点 ~ " + Int.MAX_VALUE + "点");
			layout.addView(text);
			var lytMaxHp = new android.widget.LinearLayout(CTX);
			layout.addView(lytMaxHp);
			var edtMaxHp = new android.widget.EditText(CTX);
			edtMaxHp.setText(String(Entity.getMaxHealth(entity)));
			edtMaxHp.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			lytMaxHp.addView(edtMaxHp);
			var text = new android.widget.TextView(CTX);
			text.setText("点");
			lytMaxHp.addView(text);
			var button = new android.widget.Button(CTX);
			button.setText("OK");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				Entity.setMaxHealth(entity, edtMaxHp.getText());
			}}));
			layout.addView(button);
			var text = new android.widget.TextView(CTX);
			text.setText("位置");
			text.setTextSize(text.getTextSize());
			layout.addView(text);
			var text = new android.widget.TextView(CTX);
			text.setText("x");
			layout.addView(text);
			var edtX = new android.widget.EditText(CTX);
			edtX.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			edtX.setLayoutParams(TEXT_PARAMS);
			edtX.setText(String(Math.floor(Entity.getX(entity))));
			layout.addView(edtX);
			var text = new android.widget.TextView(CTX);
			text.setText("y");
			layout.addView(text);
			var edtY = new android.widget.EditText(CTX);
			edtY.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			edtY.setLayoutParams(TEXT_PARAMS);
			edtY.setText(String(Math.floor(Entity.getY(entity))));
			layout.addView(edtY);
			var text = new android.widget.TextView(CTX);
			text.setText("z");
			layout.addView(text);
			var edtZ = new android.widget.EditText(CTX);
			edtZ.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			edtZ.setLayoutParams(TEXT_PARAMS);
			edtZ.setText(String(Math.floor(Entity.getZ(entity))));
			layout.addView(edtZ);
			var button = new android.widget.Button(CTX);
			button.setText("OK");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				setPosition(entity, Number(edtX.getText()), Number(edtY.getText()), Number(edtZ.getText()));
			}}));
			layout.addView(button);
			var text = new android.widget.TextView(CTX);
			text.setText("旋转");
			text.setTextSize(text.getTextSize());
			layout.addView(text);
			var text = new android.widget.TextView(CTX);
			text.setText("水平\n取値 -180° ~ 180°");
			layout.addView(text);
			var lytYaw = new android.widget.LinearLayout(CTX);
			layout.addView(lytYaw);
			var edtYaw = new android.widget.EditText(CTX);
			edtYaw.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			edtYaw.setText(String(Math.floor(getYaw(entity))));
			lytYaw.addView(edtYaw);
			var text = new android.widget.TextView(CTX);
			text.setText("°");
			lytYaw.addView(text);
			var sekYaw = new android.widget.SeekBar(CTX);
			sekYaw.setMax(360);
			sekYaw.setProgress(Math.floor(getYaw(entity)) + 180);
			sekYaw.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
				const YAW = view.getProgress() - 180;
				if (edtYaw.getText() != YAW) edtYaw.setText(String(YAW));
				setRot(entity, YAW, getPitch(entity));
			}}));
			layout.addView(sekYaw);
			edtYaw.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
				sekYaw.setProgress(Number(s) % 360 + 180);
			}}));
			var text = new android.widget.TextView(CTX);
			text.setText("垂直\n取値 -90° ~ 90°");
			layout.addView(text);
			var lytPitch = new android.widget.LinearLayout(CTX);
			layout.addView(lytPitch);
			var edtPitch = new android.widget.EditText(CTX);
			edtPitch.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
			edtPitch.setText(String(Math.floor(getPitch(entity))));
			lytPitch.addView(edtPitch);
			var text = new android.widget.TextView(CTX);
			text.setText("°");
			lytPitch.addView(text);
			var sekPitch = new android.widget.SeekBar(CTX);
			sekPitch.setMax(180);
			sekPitch.setProgress(Math.floor(getPitch(entity)) + 90);
			sekPitch.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
				const PITCH = view.getProgress() - 90;
				if (edtPitch.getText() != PITCH) edtPitch.setText(String(PITCH));
				setRot(entity, getYaw(entity), PITCH);
			}}));
			layout.addView(sekPitch);
			edtPitch.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
				sekPitch.setProgress(Number(s) % 360 + 90);
			}}));
			var button = new android.widget.Button(CTX);
			button.setText("效果");
			button.setTextSize(button.getTextSize());
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				Entity.effect(entity);
			}}));
			layout.addView(button);
		}
		var text = new android.widget.TextView(CTX);
		text.setText("点燃");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("持续时间\n" +
			"取値 0s ~ 2040109465s");
		layout.addView(text);
		var lytFire = new android.widget.LinearLayout(CTX);
		layout.addView(lytFire);
		var edtFire = new android.widget.EditText(CTX);
		edtFire.setText("0");
		edtFire.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		lytFire.addView(edtFire);
		var text = new android.widget.TextView(CTX);
		text.setText("s");
		lytFire.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.setFireTicks(entity, edtFire.getText());
		}}));
		layout.addView(button);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Target.ent == entity);
	checkbox.setText("瞄准");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Target.setTarget(checked ? entity : -1);
	}}));
	layout.addView(checkbox);
	var button = new android.widget.Button(CTX);
	button.setText("旁观");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		ModPE.scor(entity, true);
	}}));
	layout.addView(button);
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("骑行");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			rideAnimal(getPlayerEnt(), entity);
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("操控");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			if (entity == getPlayerEnt()) Entity.sel.controlPlayer(); else if (Entity.getEntityTypeId(entity) != EntityType.PLAYER) {
				Entity.setImmobile(entity, true);
				ModPE.scor(entity);
				entroller.pos = new Point(getPlayerX(), getPlayerY(), getPlayerZ());
				setPosition(getPlayerEnt(), Entity.getX(entity), Entity.getY(entity) + 1.8, Entity.getZ(entity));
				entroller.ent = entity;
			}
		}}));
		layout.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("移动");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("允许");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.setImmobile(entity, false);
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("禁止");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.setImmobile(entity, true);
		}}));
		layout.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("攻击目标");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("标识码");
		layout.addView(text);
		var edtTarget = new android.widget.EditText(CTX);
		if (TMI) edtTarget.setText(String(Entity.getTarget(entity))); else edtTarget.setText("");
		edtTarget.setLayoutParams(TEXT_PARAMS);
		layout.addView(edtTarget);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.setTarget(entity, Number(edtTarget.getText()));
		}}));
		layout.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("爆炸");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("半径");
		layout.addView(text);
		var lytRadius = new android.widget.LinearLayout(CTX);
		layout.addView(lytRadius);
		var edtRadius = new android.widget.EditText(CTX);
		edtRadius.setText("3");
		edtRadius.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
		lytRadius.addView(edtRadius);
		var text = new android.widget.TextView(CTX);
		text.setText("m");
		lytRadius.addView(text);
		var chkBurnt = new android.widget.CheckBox(CTX);
		chkBurnt.setText("燃烧");
		layout.addView(chkBurnt);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			explode(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity), edtRadius.getText(), chkBurnt.isChecked());
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("移除");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.remove(entity);
			wndSelEnt.dismiss();
			wndEnts.dismiss();
			Entity.sel.showEnts();
		}}));
		layout.addView(button);
	}
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndSelEnt = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndSelEnt.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndSelEnt.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * 2, 0);
}

Entity.sel.showEnts = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Entity.canSel);
	checkbox.setText("点击实体选定");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Entity.canSel = checked;
	}}));
	layout.addView(checkbox);
	var button = new android.widget.Button(CTX);
	button.setText("选定自己");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (("," + Entity.sel.ents.join() + ",").indexOf("," + getPlayerEnt() + ",") == -1) Entity.sel.ents.push(getPlayerEnt());
		wndEnts.dismiss();
		Entity.sel.showEnts();
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText("已选定实体");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("长按以取消选定");
	layout.addView(text);
	var lytEnts = new android.widget.LinearLayout(CTX);
	lytEnts.setOrientation(lytEnts.VERTICAL);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(lytEnts);
	layout.addView(scroll);
	var button = new android.widget.Button(CTX);
	button.setText("+\n");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Entity.sel.add();
	}}));
	lytEnts.addView(button);
	var nameTag = "";
	for (var e in Entity.sel.ents) {
		var button = new android.widget.Button(CTX);
		if (Entity.getEntityTypeId(Entity.sel.ents[e]) == -1) nameTag = "不在范围内"; else {
			nameTag = Entity.getNameTag(Entity.sel.ents[e]);
			if (nameTag == "") nameTag = Entity.getName(Entity.getEntityTypeId(Entity.sel.ents[e]));
		}
		button.setText(e + "\n" + nameTag);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			if (Entity.getEntityTypeId(Entity.sel.ents[e]) > -1) Entity.sel.ent(Entity.sel.ents[(view.getText()).split("\n")[0]]);
		}}));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			Entity.sel.ents.splice((view.getText()).split("\n")[0], 1);
			wndEnts.dismiss();
			Entity.sel.showEnts();
			return true;
		}}));
		lytEnts.addView(button);
	}
	wndEnts = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndEnts.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndEnts.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Entity.spawn = function (x, y, z, left) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			for (var e in chkEnts) try {
				if (chkEnts[e].isChecked()) for (var t = 1; t <= edtTimes.getText(); t++) Level.spawnMob(x, y, z, e);
			}
			catch (err) {
			}
		}}));
		layout.addView(button);
	}
	var button = new android.widget.Button(CTX);
	button.setText("生成蛋");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		for (var e in chkEnts) try {
			if (chkEnts[e].isChecked()) addItemInventory(383, edtTimes.getText(), e);
		}
		catch (err) {
		}
	}}));
	layout.addView(button);
	var lytTimes = new android.widget.LinearLayout(CTX);
	layout.addView(lytTimes);
	var text = new android.widget.TextView(CTX);
	text.setText("数量");
	lytTimes.addView(text);
	var edtTimes = new android.widget.EditText(CTX);
	edtTimes.setText("1");
	edtTimes.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytTimes.addView(edtTimes);
	var text = new android.widget.TextView(CTX);
	text.setText("个");
	lytTimes.addView(text);
	var lytEnts = new android.widget.LinearLayout(CTX);
	lytEnts.setOrientation(lytEnts.VERTICAL);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(lytEnts);
	layout.addView(scroll);
	var chkEnts = [];
	for (e = 10; e <= 101; e++) if (Entity.getName(e) != "") {
		chkEnts[e] = new android.widget.CheckBox(CTX);
		chkEnts[e].setText(e + " " + Entity.getName(e));
		lytEnts.addView(chkEnts[e]);
	}
	var window = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * left, 0);
}

Entity.sweeepTheFloor = function () {
	const E = Entity.getAll();
	for (var r in E) if (/^(64|69|80)$/.test(Entity.getEntityTypeId(E[r]))) Entity.remove(E[r]);
}

function entityAddedHook(entity) {
	if (("," + Entity.be.types.join() + ",").indexOf("," + Entity.getEntityTypeId(entity) + ",") > -1) if (TMI) Entity.be.ents.push(entity); else Entity.remove(entity);
}

function explodeHook(entity, x, y, z, power, onFire) {
	if (axpld) preventDefault();
}

function game() {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("游戏模式");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var rdoSurvival = new android.widget.RadioButton(CTX);
	rdoSurvival.setChecked(Level.getGameMode() == 0);
	rdoSurvival.setText(ModPE.getI18n("gameMode.survival"));
	rdoSurvival.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			rdoCreative.setChecked(false);
			Level.setGameMode(0);
		}
	}}));
	layout.addView(rdoSurvival);
	var rdoCreative = new android.widget.RadioButton(CTX);
	rdoCreative.setChecked(Level.getGameMode() == 1);
	rdoCreative.setText(ModPE.getI18n("gameMode.creative"));
	rdoCreative.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			rdoSurvival.setChecked(false);
			Level.setGameMode(1);
		}
	}}));
	layout.addView(rdoCreative);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(sp);
	checkbox.setText("点击实体旁观");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		sp = checked;
	}}));
	layout.addView(checkbox);
	if (pe) {
		var text = new android.widget.TextView(CTX);
		text.setText("时间");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("取値 0t ~ " + Int.MAX_VALUE + "t");
		layout.addView(text);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setText("锁定");
		checkbox.setChecked(lockTime >= 0);
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			lockTime = (checked) ? edtTime.getText() : -1;
		}}));
		layout.addView(checkbox);
		var lytTime = new android.widget.LinearLayout(CTX);
		layout.addView(lytTime);
		var edtTime = new android.widget.EditText(CTX);
		edtTime.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		edtTime.setText(String(Level.getTime()));
		lytTime.addView(edtTime);
		var text = new android.widget.TextView(CTX);
		text.setText("t");
		lytTime.addView(text);
		var sekTime = new android.widget.SeekBar(CTX);
		sekTime.setMax(23999);
		Level.setTime(Level.getTime() % 24000);
		sekTime.setProgress(Level.getTime());
		sekTime.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			const TIME = view.getProgress();
			if (edtTime.getText() != TIME) edtTime.setText(String(TIME));
			Level.setTime(TIME);
		}}));
		layout.addView(sekTime);
		edtTime.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			sekTime.setProgress(Number(s) % 24000);
		}}));
		var button = new android.widget.Button(CTX);
		button.setText("正午");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			sekTime.setProgress(6000);
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("午夜");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			sekTime.setProgress(18000);
		}}));
		layout.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("永远快进至傍晚");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("激活");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			setNightMode(true);
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("结束");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			setNightMode(false);
		}}));
		layout.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("雨");
		layout.addView(text);
		text.setTextSize(text.getTextSize());
		var text = new android.widget.TextView(CTX);
		text.setText("取値 0级 ~ 1级");
		layout.addView(text);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(lockWeather.rain >= 0);
		if (TMI) checkbox.setEnabled(false);
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			lockWeather.rain = (checked) ? edtRain.getText() : -1;
		}}));
		checkbox.setText("锁定");
		layout.addView(checkbox);
		var lytRain = new android.widget.LinearLayout(CTX);
		layout.addView(lytRain);
		var edtRain = new android.widget.EditText(CTX);
		if (TMI) edtRain.setEnabled(false);
		edtRain.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
		edtRain.setText(String(Level.getRainLevel()));
		lytRain.addView(edtRain);
		var text = new android.widget.TextView(CTX);
		text.setText("级");
		lytRain.addView(text);
		var sekRain = new android.widget.SeekBar(CTX);
		if (TMI) sekRain.setEnabled(false);
		sekRain.setMax(10);
		sekRain.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			const RAIN = view.getProgress() / 10;
			if (edtRain.getText() != RAIN) edtRain.setText(String(RAIN));
			Level.setRainLevel(RAIN);
		}}));
		sekRain.setProgress(Level.getRainLevel() * 10);
		layout.addView(sekRain);
		edtRain.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			sekRain.setProgress(Number(s) * 10);
		}}));
		var text = new android.widget.TextView(CTX);
		text.setText("闪电");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("取値 0级 ~ 1级");
		layout.addView(text);
		var checkbox = new android.widget.CheckBox(CTX);
		if (TMI) checkbox.setEnabled(false);
		checkbox.setChecked(lockWeather.lightning >= 0);
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			lockWeather.lightning = (checked) ? edtLightning.getText() : -1;
		}}));
		checkbox.setText("锁定");
		layout.addView(checkbox);
		var lytLightning = new android.widget.LinearLayout(CTX);
		layout.addView(lytLightning);
		var edtLightning = new android.widget.EditText(CTX);
		if (TMI) edtLightning.setEnabled(false);
		edtLightning.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
		edtLightning.setText(String(Level.getLightningLevel()));
		lytLightning.addView(edtLightning);
		var text = new android.widget.TextView(CTX);
		text.setText("级");
		lytLightning.addView(text);
		var sekLightning = new android.widget.SeekBar(CTX);
		if (TMI) sekLightning.setEnabled(false);
		sekLightning.setMax(10);
		sekLightning.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			const LIGHTNING = view.getProgress() / 10;
			if (edtLightning().getText() != LIGHTNING) edtLightning.setText(String(LIGHTNING));
			Level.setLightningLevel(LIGHTNING);
		}}));
		sekLightning.setProgress(Level.getLightningLevel() * 10);
		layout.addView(sekLightning);
		edtLightning.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			sekLightning.setProgress(Number(s) * 10);
		}}));
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(treeCapitator);
		checkbox.setText("科学斩树");
		checkbox.setTextSize(checkbox.getTextSize());
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			treeCapitator = checked;
		}}));
		layout.addView(checkbox);
		var button = new android.widget.Button(CTX);
		button.setText("连锁挖矿");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			veinMiner.menu();
		}}));
		layout.addView(button);
	}
	var text = new android.widget.TextView(CTX);
	text.setText("游戏速度 (TPS)");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytSpeed = new android.widget.LinearLayout(CTX);
	layout.addView(lytSpeed);
	var edtSpeed = new android.widget.EditText(CTX);
	edtSpeed.setText("20");
	edtSpeed.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
	lytSpeed.addView(edtSpeed);
	var text = new android.widget.TextView(CTX);
	text.setText("t/s");
	lytSpeed.addView(text);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		ModPE.setGameSpeed(edtSpeed.getText());
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText("提示讯息");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(bl);
	checkbox.setText("显示亮度");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		bl = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(tipHp);
	checkbox.setText("显示生命値");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		tipHp = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(tipTile);
	checkbox.setText("显示方块资讯");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		tipTile = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(rd);
	checkbox.setText("显示" + ModPE.getI18nEx("tile.redstone_wire.name", true, true) + "讯号强度");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		rd = checked;
	}}));
	layout.addView(checkbox);
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("禁用" + ModPE.getI18nEx("entity.Item.name", true));
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			bi.bi();
		}}));
		layout.addView(button);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(Item.insoluble);
		checkbox.setText(ModPE.getI18nEx("entity.Item.name", false, true) + "在" + ModPE.getI18nEx("tile.flowing_lava.name", true, true) + "中不下沈");
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			Item.insoluble = checked;
		}}));
		layout.addView(checkbox);
		var button = new android.widget.Button(CTX);
		button.setText(ModPE.getI18nEx("entity.Mob.name", false, true) + "骑行");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.ride();
		}}));
		layout.addView(button);
	}
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("item.sign.name"));
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	if (pe) {
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(signTextNa);
		checkbox.setText("无字" + ModPE.getI18nEx("item.sign.name", true));
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			signTextNa = checked;
		}}));
		layout.addView(checkbox);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(st.editable);
	checkbox.setText("点击" + ModPE.getI18nEx("item.sign.name", true, true) + (pe ? "编辑" : "査看"));
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		st.editable = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("规则");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(pui);
	checkbox.setText("点击方块不使用");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		pui = checked;
	}}));
	checkbox.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view, e) {
		var alert = new android.app.AlertDialog.Builder(CTX);
		alert.setTitle(view.getText());
		alert.setMessage("例如:\n" +
			"当手持" + ModPE.getI18nEx("entity.Item.name", true, true) + "点击" + ModPE.getI18nEx("tile.crafting_table.name", true) + ", 容器等方块时不使用.\n\n" +
			"常用于冒险, PVP 等.");
		alert.show();
		return true;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Block.getFriction(79) < BlockFriction.ICE);
	checkbox.setText("粗糙的" + ModPE.getI18nEx("tile.ice.name", true));
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		const NEW_FRICTION = checked ? BlockFriction.STANDARD : BlockFriction.ICE;
		Block.setFriction(79, NEW_FRICTION);
		Block.setFriction(174, NEW_FRICTION);
		Block.setFriction(207, NEW_FRICTION);
	}}));
	layout.addView(checkbox);
	if (pe) {
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(axpld);
		checkbox.setText("防爆");
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			axpld = checked;
		}}));
		layout.addView(checkbox);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(Explode.explode);
		checkbox.setText("点击方块爆炸");
		checkbox.setTextSize(checkbox.getTextSize());
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			Explode.explode = checked;
		}}));
		layout.addView(checkbox);
		var text = new android.widget.TextView(CTX);
		text.setText("半径");
		layout.addView(text);
		var lytRadius = new android.widget.LinearLayout(CTX);
		layout.addView(lytRadius);
		var edit = new android.widget.EditText(CTX);
		edit.setText(String(Explode.radius));
		edit.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			Explode.radius = Number(s);
		}}));
		edit.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
		lytRadius.addView(edit);
		var text = new android.widget.TextView(CTX);
		text.setText("m");
		lytRadius.addView(text);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(Explode.burnt);
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			Explode.burnt = checked;
		}}));
		checkbox.setText("燃烧");
		layout.addView(checkbox);
		var button = new android.widget.Button(CTX);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			paint.paint();
		}}));
		button.setText("画图");
		button.setTextSize(button.getTextSize());
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			hbr.setFb();
		}}));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view, e) {
			var alert = new android.app.AlertDialog.Builder(CTX);
			alert.setTitle(view.getText());
			alert.setMessage("主机世界下手持" + ModPE.getI18nEx("item.blaze_rod.name", true) + ";\n" +
				"1\t点击实体在实体位置召唤闪电;\n" +
				"2\t点击 [悬浮窗] 在玩家位置向前方发射" + ModPE.getI18nEx("entity.Fireball.name", true) + ".");
			alert.show();
			return true;
		}}));
		button.setText("Herobrine 的" + ModPE.getI18nEx("item.blaze_rod.name", true));
		button.setTextSize(button.getTextSize());
		layout.addView(button);
	}
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndGame = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndGame.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndGame.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

hbr.loadShooter = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setGravity(android.view.Gravity.CENTER);
	text.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {		
		if (getCarriedItem() == 369) {
			const YAW = getYaw() % 360 * Math.PI / 180, PITCH = getPitch() * Math.PI / 180,
				SY = -Math.sin(YAW), SP = -Math.sin(PITCH), CY = Math.cos(YAW),
				ARROW = Level.spawnMob(Player.getX() + SY, Player.getY() + SP, Player.getZ() + CY, hbr.fb);
			setVelX(ARROW, SY * hbr.vel);
			setVelY(ARROW, SP * hbr.vel);
			setVelZ(ARROW, CY * hbr.vel);
		}
	}}));
	text.setText("发射\n");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	hbr.window = new android.widget.PopupWindow(layout, Wnd.WIDTH / 2, Wnd.HEIGHT / 2);
	hbr.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
}

hbr.setFb = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(hbr.hbr);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		hbr.hbr = checked;
		if (checked) hbr.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, Wnd.HEIGHT); else {
			try {
				hbr.window.dismiss();
			}
			catch (err) {
			}
		}
	}}));
	checkbox.setText("Herobrine 的" + ModPE.getI18nEx("item.blaze_rod.name", true));
	checkbox.setTextSize(checkbox.getTextSize());
	layout.addView(checkbox);
	var button = new android.widget.Button(CTX);
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		hbr.fb += (hbr.fb - 85) / 9 * ((hbr.fb - 94) / 5 * 29.25 + (hbr.fb - 89) / 5 * -14) + 9;
		wndSetFb.dismiss();
		hbr.setFb();
	}}));
	button.setText(ModPE.getI18nEx("entity.Fireball.name", true) + "样式: " + hbr.fb + " 式");
	button.setTextSize(button.getTextSize());
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText("速度");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtVel = new android.widget.EditText(CTX);
	edtVel.setText(String(hbr.vel));
	edtVel.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		hbr.vel = Number(s);
	}}));
	edtVel.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
	edtVel.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtVel);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndSetFb = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndSetFb.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndSetFb.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

function il(style) {
	var alert = new android.app.AlertDialog.Builder(CTX), msg = "";
	switch (style.toLowerCase()) {
		case "chat":
			msg = "§ + 0123456789abcdefklmnor";
			clientMessage("§00§11§22§33§44§55§66§77§88§99§aa§bb§cc§dd§ee§ff§r§kk§r§ll§r§oo§rr");
			break;
		case "effect":
			for (var i = 1; i <= 24; i++) msg += i + "\t" + Entity.getEffectName(i) + "\n";
			break;
		case "ench":
			for (var i = 0; i <= 24; i++) msg += i + "\t" + Ench.getName(i) + "\n";
			break;
		case "ent":
			for (var i = 10; i <= 101; i++) if (Entity.getName(i) != "") msg += i + "\t" + Entity.getName(i) + "\n";
			break;
		case "item":
			for (var i = 256; i <= 498; i++) try {
				for (var d = 0; d < 16 && (Item.getName(i, d) != Item.getName(i) || d == 0); d++) {
					msg += i + ":" + d + "\t" + Item.getName(i, d) + "\n";
					if (i == 325 && d == 1) {
						msg += "325:8\t" + Item.getName(325, 8) + "\n325:10\t" + Item.getName(325, 10) + "\n";
						break;
					} else if (/^(262|373|438)$/.test(i)) {
						for (var e = 1; e < 36; e++) msg += i + ":" + e + "\t" + Item.getName(i, e) + "\n";
						if (i == 262) msg += "262:36\t" + Item.getName(262, 36) + "\n";
						break;
					}
					if (/^333$/.test(i) && d == 5) break;
				}
			}
			catch (err) {
			}
			break;
		case "tile":
			for (var i = 0; i <= 255; i++) try {
				for (var d = 0; d < 16 && (Item.getName(i, d) != Item.getName(i) || d == 0); d++) {
					msg += i + ":" + d + "\t" + Item.getName(i, d) + "\n";
					if (/^(12|19|37)$/.test(i) && d == 1 || /^(43|44)$/.test(i) && d == 7 || /^(181|182)$/.test(i) && d == 0) break;
				}
			}
			catch (err) {
			}
			break;
		default:
			msg = Item.translatedNameToId(style);
			break;
	}
	alert.setMessage(msg);
	alert.show();
}

inv.armorMnu = function (slotId) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("重命名");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtCustomName = new android.widget.EditText(CTX);
	edtCustomName.setText(Entity.getArmorCustomName(getPlayerEnt(), slotId));
	edtCustomName.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		Entity.setArmorCustomName(getPlayerEnt(), slotId, s);
	}}));
	edtCustomName.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtCustomName);
	var button = new android.widget.Button(CTX);
	button.setText("§");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtCustomName.setText(edtCustomName.getText().toString().slice(0, edtCustomName.getSelectionStart()) + "§" + edtCustomName.getText().toString().slice(edtCustomName.getSelectionEnd()));
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtId = new android.widget.EditText(CTX);
	edtId.setText(String(Player.getArmorSlot(slotId)));
	edtId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtId.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtId);
	var button = new android.widget.Button(CTX);
	button.setText("销毁");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtId.setText("0");
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	layout.addView(text);
	var lytDamage = new android.widget.LinearLayout(CTX);
	layout.addView(lytDamage);
	var edtDamage = new android.widget.EditText(CTX);
	edtDamage.setText(String(Player.getArmorSlotDamage(slotId)));
	edtDamage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytDamage.addView(edtDamage);
	var text = new android.widget.TextView(CTX);
	text.setText("/ " + Item.getMaxDamage(edtId.getText()));
	lytDamage.addView(text);
	var button = new android.widget.Button(CTX);
	button.setText("修复");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtDamage.setText("0");
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText());
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtId.setText(view.getText().split("\n")[0].split(":")[0]);
				edtDamage.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[0]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Player.setArmorSlot(slotId, edtId.getText(), edtDamage.getText());
		wndArmor.dismiss();
		wndInv.dismiss();
		inv.inv();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndArmor = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndArmor.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndArmor.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

inv.inv = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	if (lan) {
		var button = new android.widget.Button(CTX);
		button.setText("新手奖励");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			if (Player.haveItem()) print("\n请先淸空" + ModPE.getI18nEx("container.inventory", true)); else {
				addItemInventory(276, 255); var eids = Ench.bestEnches(276); for (var e in eids) Player.enchant(9, eids[e], Short.MAX_VALUE);
				addItemInventory(277, 255); eids = Ench.bestEnches(277); for (e in eids) Player.enchant(10, eids[e], Short.MAX_VALUE);
				addItemInventory(278, 255); eids = Ench.bestEnches(278); for (e in eids) Player.enchant(11, eids[e], Short.MAX_VALUE);
				addItemInventory(279, 255); eids = Ench.bestEnches(279); for (e in eids) Player.enchant(12, eids[e], Short.MAX_VALUE);
				addItemInventory(347, 255);
				addItemInventory(438, 255, 22);
				addItemInventory(364, 255);
				addItemInventory(1, 255);
				addItemInventory(261, 255); eids = Ench.bestEnches(261); for (e in eids) Player.enchant(17, eids[e], Short.MAX_VALUE);
				Player.clearInventorySlot(7);
				Player.setInventorySlot(18, 86, 255);
				Player.setInventorySlot(19, 262, 255, 25);
				Player.setInventorySlot(20, 323, 255);
				Player.setInventorySlot(21, 325, 255);
				Player.setInventorySlot(22, 345, 255);
				Player.setInventorySlot(23, 22, 255, 4);
				Player.setInventorySlot(24, 42, 255);
				Player.setInventorySlot(25, 41, 255);
				Player.setInventorySlot(26, 57, 255);
				Player.setInventorySlot(27, 17, 255);
				Player.setInventorySlot(28, 5, 255);
				Player.setInventorySlot(29, 4, 255);
				Player.setInventorySlot(30, 310, 255); eids = Ench.bestEnches(310); for (e in eids) Player.enchant(30, eids[e], Short.MAX_VALUE);
				Player.setInventorySlot(31, 311, 255); eids = Ench.bestEnches(311); for (e in eids) Player.enchant(31, eids[e], Short.MAX_VALUE);
				Player.setInventorySlot(32, 312, 255); eids = Ench.bestEnches(312); for (e in eids) Player.enchant(32, eids[e], Short.MAX_VALUE);
				Player.setInventorySlot(33, 313, 255); eids = Ench.bestEnches(313); for (e in eids) Player.enchant(33, eids[e], Short.MAX_VALUE);
				Player.setArmorSlot(0, 310);
				Player.setArmorSlot(1, 311);
				Player.setArmorSlot(2, 312);
				Player.setArmorSlot(3, 313);
				wndInv.dismiss();
				inv.inv();
			}
		}}));
		layout.addView(button);
	}
	var text = new android.widget.TextView(CTX);
	text.setText("长按以淸除");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	if (lan) {
		var button = new android.widget.Button(CTX);
		button.setText(ModPE.getI18n("container.inventory"));
		button.setTextSize(button.getTextSize());
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			for (var s = 0; s < 45; s++) Player.clearInventorySlot(s);
			for (s = 0; s < 4; s++) Player.setArmorSlot(s);
			wndInv.dismiss();
			inv.inv();
			return true;
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("\n+\n");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			addItem(getPlayerEnt(), 1);
		}}));
		layout.addView(button);
		for (var s = 9; s < 45; s++) {
			var button = new android.widget.Button(CTX), itemName = "";
			if (inv.dontGetItame) itemName = Player.getInventorySlot(s) + ":" + Player.getInventorySlotData(s); else itemName = (Player.getItemCustomName(s) == null || Player.getItemCustomName(s) == "" ? Item.getName(Player.getInventorySlot(s), Player.getInventorySlotData(s)) : Player.getItemCustomName(s));
			button.setText(s + "\n" +
				itemName + "\n" +
				Player.getInventorySlotCount(s));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				inv.invMnu(view.getText().split("\n")[0]);
			}}));
			button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
				Player.clearInventorySlot(view.getText().split("\n")[0]);
				wndInv.dismiss();
				inv.inv();
				return true;
			}}));
			layout.addView(button);
		}
	}
	var text = new android.widget.TextView(CTX);
	text.setText("盔甲");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	for (var s = 0; s < 4; s++) try {
		if (Player.getArmorSlot(s) == 0) Player.setArmorSlot(s);
		var button = new android.widget.Button(CTX), itemName = "";
		if (inv.dontGetItame) itemName = Player.getArmorSlot(s) + ":" + Player.getArmorSlotDamage(s); else itemName = (Entity.getArmorCustomName(getPlayerEnt(), s) == null || Entity.getArmorCustomName(getPlayerEnt(), s) == "" ? Item.getName(Player.getArmorSlot(s), Player.getArmorSlotDamage(s)) : Entity.getArmorCustomName(getPlayerEnt(), s));
		button.setText(s + "\n" +
			itemName);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			inv.armorMnu(view.getText().split("\n")[0]);
		}}));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			Player.setArmorSlot(view.getText().split("\n")[0]);
			wndInv.dismiss();
			inv.inv();
			return true;
		}}));
		layout.addView(button);
	}
	catch (err) {
	}
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	wndInv = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndInv.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndInv.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

inv.invMnu = function (slotId) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("重命名");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtCustomName = new android.widget.EditText(CTX);
	//edtCustomName.setText(Player.getItemCustomName(slotId));
	edtCustomName.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		Player.setItemCustomName(slotId, s);
	}}));
	edtCustomName.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtCustomName);
	var button = new android.widget.Button(CTX);
	button.setText("§");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtCustomName.setText(edtCustomName.getText().toString().slice(0, edtCustomName.getSelectionStart()) + "§" + edtCustomName.getText().toString().slice(edtCustomName.getSelectionEnd()));
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText(ModPE.getI18n("container.enchant"));
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Ench.ench(slotId);
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtId = new android.widget.EditText(CTX);
	edtId.setText(String(Player.getInventorySlot(slotId)));
	edtId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtId.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtId);
	var button = new android.widget.Button(CTX);
	button.setText("销毁");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtId.setText("0");
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	layout.addView(text);
	var lytDamage = new android.widget.LinearLayout(CTX);
	layout.addView(lytDamage);
	var edtDamage = new android.widget.EditText(CTX);
	edtDamage.setText(String(Player.getInventorySlotData(slotId)));
	edtDamage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytDamage.addView(edtDamage);
	var text = new android.widget.TextView(CTX);
	text.setText("/ " + Item.getMaxDamage(edtId.getText()));
	lytDamage.addView(text);
	var button = new android.widget.Button(CTX);
	button.setText("修复");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtDamage.setText("0");
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("entity.Item.name") + " ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText());
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtId.setText(view.getText().split("\n")[0].split(":")[0]);
				edtDamage.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[0]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var text = new android.widget.TextView(CTX);
	text.setText("数量");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytCount = new android.widget.LinearLayout(CTX);
	layout.addView(lytCount);
	var edtCount = new android.widget.EditText(CTX);
	edtCount.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtCount.setText(String(Player.getInventorySlotCount(slotId)));
	lytCount.addView(edtCount);
	var text = new android.widget.TextView(CTX);
	if (TMI) text.setText("个"); else text.setText("/ " + Item.getMaxStackSize(edtId.getText()) + "组");
	lytCount.addView(text);
	var sekCount = new android.widget.SeekBar(CTX);
	sekCount.setMax(255);
	sekCount.setProgress(Player.getInventorySlotCount(slotId));
	sekCount.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
		edtCount.setText(String(sekCount.getProgress()));
	}}));
	layout.addView(sekCount);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		var enches = [];
		if (!TMI) enches = Player.getEnchantments(slotId);
		if (edtDamage.getText() > Item.getMaxDamage(edtId.getText())) Item.setMaxDamage(edtId.getText(), edtDamage.getText());
		Player.setInventorySlot(slotId, edtId.getText(), edtCount.getText(), edtDamage.getText());
		if (edtCustomName.getText() != "") Player.setItemCustomName(slotId, edtCustomName.getText());
		for (e in enches) Player.enchant(slotId, enches[e].type, enches[e].level);
		if (edtCount.getText() < 256) sekCount.setProgress(edtCount.getText());
		wndInvMnu.dismiss();
		wndInv.dismiss();
		inv.inv();
	}}));
	layout.addView(button);
	if (TMI) {
		var text = new android.widget.TextView(CTX);
		text.setText("使用 Toolbox 无法保留附魔魔咒");
		layout.addView(text);
	}
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndInvMnu = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndInvMnu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndInvMnu.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Item.searchItem = function (keyword, tileOnly) {
	if (keyword == "") return [];
	var ids = [];
	for (var i = 0; i <= 498; i++) try {
		if (tileOnly) if (i == 256) {
			i = 498;
			continue;
		}
		for (var d = 0; d < 16 && (Item.getName(i, d) != Item.getName(i) || d == 0); d++) {
			if (Item.getName(i, d).indexOf(keyword) > -1) ids.push(i + ":" + d);
			if (i == 325 && d == 1) {
				if (Item.getName(325, 8).indexOf(keyword) > -1) ids.push("325:8");
				if (Item.getName(325, 10).indexOf(keyword) > -1) ids.push("325:10");
				break;
			} else if (/^(262|373|438|441)$/.test(i)) {
				for (var e = 1; e < 36; e++) if (Item.getName(i, e).indexOf(keyword) > -1) ids.push(i + ":" + e);
				if (/^(262|441)$/.test(i)) if (Item.getName(i, 36).indexOf(keyword) > -1) ids.push(i + ":36");
				break;
			}
			if (/^(12|19|37)$/.test(i) && d == 1 || /^(43|44)$/.test(i) && d == 7 || /^(181|182)$/.test(i) && d == 0 || /^333$/.test(i) && d == 5) break;
		}
	}
	catch (err) {
	}
	return ids;
}

ki.keep = function (style) {
	switch (style) {
		case "r":
			for (var r = 9; r < 45; r++) {
				Player.setInventorySlot(r, ki.id[r], ki.count[r], ki.damage[r]);
				if (!TMI) for (var e in ki.enches[r]) Player.enchant(r, ki.enches[r][e].type, ki.enches[r][e].level);
			}
			for (r = 45; r < 49; r++) Player.setArmorSlot(r - 45, ki.id[r], ki.damage[r]);
			Player.setLevel(ki.lvl);
			Player.setExp(ki.xp);
			break;
		case "w":
			for (var w = 9; w < 45; w++) {
				ki.id[w] = (Player.getInventorySlot(w)), ki.count[w] = (Player.getInventorySlotCount(w)), ki.damage[w] = (Player.getInventorySlotData(w));
				if (!TMI) ki.enches[w] = Player.getEnchantments(w);
			}
			for (w = 0; w < 4; w++) {
				ki.id[w + 45] = (Player.getArmorSlot(w));
				ki.damage[w + 45] = (Player.getArmorSlotDamage(w));
			}
			ki.lvl = Player.getLevel(), ki.xp = Player.getExp();
			break;
	}
}

function langEdit() {
	var lang = [];
	if (ModPE.getLanguage().indexOf("zh_") > -1) {
		lang = [
			"toolbox.button.ingame.spawn.exit=退出生成模式",
			"toolbox.menu.search=搜寻...",
			"toolbox.menu.cancel=取消",
			"toolbox.menu.close=关闭",
			"toolbox.menu.save=储存",
			"toolbox.menu.rename=重命名",
			"toolbox.menu.all=所有",
			"toolbox.menu.add=新增",
			"toolbox.menu.edit=编辑",
			"toolbox.menu.remove=移除",
			"toolbox.menu.remove.all=移除所有",
			"toolbox.menu.set=设定",
			"toolbox.menu.game=游戏",
			"toolbox.menu.game.mode=模式",
			"toolbox.menu.game.dimension=维度",
			"toolbox.menu.game.dimension.overworld=主世界",
			"toolbox.menu.game.dimension.nether=下界",
			"toolbox.menu.game.fly=飞行",
			"toolbox.menu.game.noclip=穿墙",
			"toolbox.menu.game.health=生命値",
			"toolbox.menu.game.health.heal=治疗",
			"toolbox.menu.game.health.kill=杀死",
			"toolbox.menu.game.hunger=饥饿度",
			"toolbox.menu.game.hunger.restore=重置",
			"toolbox.menu.game.spawnpos=出生位置",
			"toolbox.menu.game.spawnpos.teleport=传送",
			"toolbox.menu.game.spawnpos.updated=你的出生位置已被更新!",
			"toolbox.menu.game.speed=游戏速度",
			"toolbox.menu.game.time=时间",
			"toolbox.menu.game.time.stop=停止时间",
			"toolbox.menu.game.ticking.disable=禁止方块更新",
			"toolbox.menu.game.weather=天气",
			"toolbox.menu.game.potions=药水效果",
			"toolbox.menu.game.entities=实体",
			"toolbox.menu.game.entities.spawn=生成",
			"toolbox.menu.game.entities.mobs=生物",
			"toolbox.menu.game.entities.entities=实体",
			"toolbox.menu.game.entities.fire=燃烧",
			"toolbox.menu.game.entities.health=设定生命値",
			"toolbox.menu.game.sprint=总是疾跑",
			"toolbox.menu.game.player.speed=玩家速度",
			"toolbox.menu.game.keepinventory=死亡防喷",
			"toolbox.menu.mod=模组",
			"toolbox.menu.mod.button=显示一个按钮于游戏中",
			"toolbox.menu.mod.button.xray=显示透视开关于游戏中",
			"toolbox.menu.mod.armorstatus=显示盔甲状态于游戏中",
			"toolbox.menu.mod.damageindicators=显示伤害计表",
			"toolbox.menu.mod.debug=显示调试讯息于游戏中",
			"toolbox.menu.mod.minimap=显示小地图于游戏中",
			"toolbox.menu.mod.name=我的世界: 携带版 Toolbox 翻译: MISTER_CHAN",
			"toolbox.menu.mod.links=链接",
			"toolbox.menu.mod.website=网页",
			"toolbox.menu.tip.enchant=点击物品去附魔它们.",
			"toolbox.menu.tip.destroy=点击物品去破坏它们.",
			"toolbox.menu.drop=掉落",
			"toolbox.menu.enchant=附魔",
			"toolbox.menu.enchant.unavailable=无附魔可获得的于此物品.",
			"toolbox.menu.potion.amplifier=增幅",
			"toolbox.menu.potion.amplifier.lbl=增幅:",
			"toolbox.menu.potion.duration=持续时间",
			"toolbox.menu.potion.duration.lbl=持续时间:",
			"toolbox.menu.teleport.add=新增传送点",
			"toolbox.menu.teleport.edit=编辑传送点",
			"toolbox.menu.teleport.name=传送点名称",
			"toolbox.menu.teleport.name.lbl=名称:",
			"toolbox.menu.tip.time=用刻键入时间. 1 秒 = 20 刻",
			"toolbox.menu.multiplayer.unavailable=抱歉, 此表格不是可获得的于多人游戏上.",
			"toolbox.menu.multiplayer.mode.simple=本地服务器",
			"toolbox.menu.multiplayer.mode.simple.desc=执行无作弊检査的服务器的模式, 例如: 分享的本地世界.",
			"toolbox.menu.multiplayer.mode.commands=公共服务器",
			"toolbox.menu.multiplayer.mode.commands.desc=支持指令的服务器的模式, 例如: PocketMine.",
			"toolbox.menu.mod.button.treecapitator=科学斩树",
			"toolbox.xray.players=显示玩家",
			"toolbox.menu.mod.button.drag=移动",
			"toolbox.menu.drag.help=去移动一个按钮, 拖动它到希望的位置",
			"toolbox.menu.minimap.label=小地图选项",
			"toolbox.menu.minimap.size.lbl=尺寸:",
			"toolbox.menu.minimap.size=尺寸",
			"toolbox.menu.minimap.scale.lbl=缩放尺寸:",
			"toolbox.menu.minimap.scale=缩放尺寸",
			"toolbox.menu.minimap.players=显示玩家",
			"toolbox.menu.minimap.mobs=显示生物",
			"toolbox.menu.minimap.coords=显示协调",
			"toolbox.menu.minimap.waypoints=显示记彔点"
		];
		for (var l in lang) {
			lang[l] = lang[l].split("=");
			ModPE.langEdit(lang[l][0], lang[l][1]);
		}
	}
}

function leaveGame() {
	isInGame = false,
		usePlyrLst = false,
		pe = false,
		list = [],
		lan = null,
		ModPE.camera = -1,
		Entity.lockEffects = {effects: [], showParticle: false};
		Entity.efv = {e: -1, effects: []};
		miner = false;
		lockTime = -1,
		lockWeather = {lightning: -1, rain: -1},
		tipPos = [],
		ndt = [],
		nvtm = [],
		Scenter.scenter = false;
	Target.setTarget(-1);
	ModPE.showTipMsgWithoutErr("");
	CTX.runOnUiThread(new java.lang.Runnable({run: function () {
		try {
			hbr.window.dismiss();
			Target.window.dismiss();
			rotatroller.window.dismiss();
			ctrller.window.dismiss();
			ModPE.wndTipMsg.dismiss();
		}
		catch (err) {
		}
	}}));
}

Level.canSeeVoid = function (x, y, z) {
	for (; y >= 0; y--) if (!Block.OPAQUE_TILES.test(getTile(x, y, z))) return false;
	return true;
}

Level.destrockBySwitching = function (x, y, z, doDrop) {
	if (!TMI && doDrop) {
		var enches = Player.getEnchantments(Player.getSelectedSlotId()), fortune = 0, items = [], getTotalCount = function (min, max) {
			var count = Math.floor((max - min + 1) * Math.random()) + min;
			return fortune == 0 ? count : count + count * ((fortune - 1) / 2 + (2 / fortune + 2));
		}, xpBottles = 0;
		for (var e in enches) if (enches[e].type == Enchantment.FORTUNE) fortune = enches[e].level;
		const ID = getTile(x, y, z), DATA = Level.getData(x, y, z);
		switch (ID) {
			default: items.push({id: ID, count: 1, data: DATA}); break;
			case 16:
				items.push({id: 263, count: getTotalCount(1, 1), data: 0});
				xpBottles = 1; // 0 ~ 2, 3 ~ 11
				break;
			case 18:
				if (DATA % 4 != 3 && Math.floor(20 * Math.random()) == 0) items.push({id: 6, count: 1, data: DATA % 4});
				else if (DATA % 4 == 3 && Math.floor(40 * Math.random()) == 0) items.push({id: 6, count: 1, data: 3});
				if (DATA % 4 == 0 && Math.floor(200 * Math.random()) == 0) items.push({id: 260, count: 1, data: 0});
				break;
			case 21:
				items.push({id: 351, count: getTotalCount(4, 8), data: 4});
				xpBottles = 1; // 2 ~ 5, 3 ~ 11
				break;
			case 56:
				items.push({id: 264, count: getTotalCount(1, 1), data: 0});
				xpBottles = 1; // 3 ~ 7, 3 ~ 11
				break;
			case 73: case 74:
				items.push({id: 331, count: getTotalCount(4, 5), data: 0});
				xpBottles = 1; // 1 ~ 5, 3 ~ 11
				break;
			case 89:
				items.push({id: 348, count: fortune == 0 ? Math.floor(3 * Math.random()) + 2 : fortune * 5, data: 0});
				break;
			case 129:
				items.push({id: 388, count: getTotalCount(1, 1), data: 0});
				xpBottles = 1; // 3 ~ 7, 3 ~ 11
				break;
			case 153:
				items.push({id: 406, count: getTotalCount(1, 1), data: 0});
				xpBottles = 1; // 2 ~ 5, 3 ~ 11
				break;
			case 161:
				if (Math.floor(20 * Math.random()) == 0) items.push({id: 6, count: 1, data: DATA % 4 + 4});
				else if (DATA % 4 == 1 && Math.floor(200 * Math.random()) == 0) items.push({id: 260, count: 1, data: 0});
				break;
		}
		setTile(x, y, z);
		for (var i in items) Level.dropItem(x, y, z, 0, items[i].id, items[i].count, items[i].data);
		for (var xp = 1; xp <= xpBottles; xp++) setPosition(Level.spawnMob(x, y, z, EntityType.EXPERIENCE_POTION), x, y, z);
	} else Level.destroyBlock(x, y, z, doDrop);
}

Math.cbrt = function (baseNumber) {
	return Math.pow(baseNumber, 1 / 3);
}

Math.distance = function (x1, y1, z1, x2, y2, z2) {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
}

Math.sgn = function (num) {
	return num == 0 ? 0 : num / Math.abs(num);
}

ModPE.getI18nEx = function (internalName, left, right) {
	const IS_ZH = /^zh/.test(ModPE.getLanguage());
	return " ".string(!IS_ZH & left) + ModPE.getI18n(internalName) + " ".string(!IS_ZH & right);
}

ModPE.loadLeaveGame = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var button = new android.widget.Button(CTX);
	button.setText(ModPE.getI18n("gui.cancel"));
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		ModPE.wndLeaveGame.dismiss();
		print("\n请稍等...");
		ModPE.leaveGame();
	}}));
	layout.addView(button);
	ModPE.wndLeaveGame = new android.widget.PopupWindow(layout, Wnd.WIDTH * 2, Wnd.HEIGHT / 2);
}

ModPE.loadTipMsg = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	txtTipMsg = new android.widget.TextView(CTX);
	txtTipMsg.setGravity(android.view.Gravity.CENTER);
	txtTipMsg.setTextColor(android.graphics.Color.argb(255, 255, 255, 255));
	layout.addView(txtTipMsg);
	ModPE.wndTipMsg = new android.widget.PopupWindow(layout);
	ModPE.wndTipMsg.setWidth(Wnd.WIDTH * 7 / 4);
}

ModPE.scor = function (entity, tips) {
	if (entity != getPlayerEnt() && tips) print("\n请在该实体被移除前回到自己的视角");
	ModPE.setCamera(entity);
	ModPE.camera = entity;
}

ModPE.screenshot = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(ModPE.lockMextToTrot);
	checkbox.setText("点击 [悬浮窗] 截屛");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		ModPE.lockMextToTrot = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("截图名");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtName = new android.widget.EditText(CTX);
	edtName.setHint("选填");
	edtName.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtName);
	var button = new android.widget.Button(CTX);
	button.setText("截图");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtName.setText(String(edtName.getText()).replace(/(\\|\/|:|\*|\?|"|<|>|\||\s)/g, "-"));
		const NAME = "-usefulCommands.js-screenshot-" + edtName.getText();
		ModPE.takeScreenshot(new Date().getSeconds() + NAME);
		print("\n" +
			"截图保存在\n" +
			"[内存卡目彔: " + new android.os.Environment.getExternalStorageDirectory() + "] /Pictures/MCPEToolbox/时间" + NAME + ".png");
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

ModPE.showTipMsgWithoutErr = function (msg) {
	try {
		if (ModPE.stim) {
			if (isInGame) {
				CTX.runOnUiThread(new java.lang.Runnable({run: function () {
					try {
						txtTipMsg.setText(android.text.Html.fromHtml(msg.toHtml()));
						ModPE.wndTipMsg.setHeight(Wnd.HEIGHT / 2 * (msg.length - msg.replace("\n", "").length + 1));
						ModPE.wndTipMsg.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, Wnd.WIDTH * 5 / 4, Wnd.HEIGHT * 11 / 4);
					}
					catch (err) {
					}
				}}));
				ModPE.showTime = 60;
			}
		} else ModPE.showTipMessage(msg);
	}
	catch (err) {
	}
}

function modTick() {
	if (!isInGame) {
		isInGame = true, list[0] = getPlayerEnt();
		if (TMI && doLangEdit) langEdit();
		if (ctrller.ctrller) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
			ctrller.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
		}}));
		if (rotatroller.controller) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
			rotatroller.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, Wnd.WIDTH * 2.5, Wnd.HEIGHT * 2.5);
			rotatroller.window.setWidth(Wnd.WIDTH);
			rotatroller.window.setHeight(Wnd.HEIGHT);
		}}));
		if (Target.automatic) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
			Target.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, Wnd.HEIGHT * 2);
			Target.text.setTextColor(android.graphics.Color.argb(255, 0, 255, 0));
		}}));
		if (ModTick.type) ModTick.forTick();
	}
	if (!ModTick.type) ModTick.tick();
}

ModTick.forTick = function () {
	const TICK = new java.lang.Thread(new java.lang.Runnable({run: function () {
		for (; ModTick.type && isInGame; ) try {
			ModTick.tick();
			TICK.sleep(ModTick.speed.millis, ModTick.speed.nanos);
		}
		catch (error) {
			throw error;
		}
	}}))
	TICK.start();
}

ModTick.tick = function () {
	if (!new RegExp("^(-1|0|" + getPlayerEnt() + ")$").test(ModPE.camera)) if (Entity.getHealth(ModPE.camera) <= 0 && Entity.getEntityTypeId(ModPE.camera) < 64) Entity.sel.controlPlayer();
	if (ModPE.stim) {
		if (ModPE.showTime > 0) ModPE.showTime--;
		if (ModPE.showTime <= 0) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
			try {
				ModPE.wndTipMsg.dismiss();
			}
			catch (err) {
			}
		}}));
	}
	if (invulnerable) if (pe) {
		Player.setHealth(Int.MAX_VALUE);
		Player.setHunger(Int.MAX_VALUE);
	} else if (Entity.getHealth(getPlayerEnt()) <= 0) Player.setHealth(Int.MAX_VALUE);
	if (ctrller.ctrller) Entity.addEffect(getPlayerEnt(), 24, 2, ctrller.velY - 1);
	if (esc) if (Block.OPAQUE_TILES.test(getTile(Math.floor(getPlayerX()), Math.floor(getPlayerY()), Math.floor(getPlayerZ())))) setPositionRelative(getPlayerEnt(), 0, 1, 0);
	if (!isNaN(noclip.x) && !isNaN(noclip.y) && !isNaN(noclip.z)) if (Block.OPAQUE_TILES.test(getTile(Math.floor(getPlayerX()), Math.floor(getPlayerY()), Math.floor(getPlayerZ())))) setPositionRelative(getPlayerEnt(), noclip.x, noclip.y, noclip.z); else noclip = new Point();
	if (ki.ki) if (pe && died) ki.keep("r"); else ki.keep(Entity.getHealth(getPlayerEnt()) > 0 || Player.haveItem() ? "w" : "r");
	died = false;
	if (noFalling.noFalling) if (!Player.isFlying() && !ctrller.ctrller) {
		var x = getPlayerX(), y = getPlayerY(), z = getPlayerZ(), height = Math.floor(y) - 2 - noFalling.height;
		for (var yo = Math.floor(y) - 2; yo > height; yo--) if (Block.OPAQUE_TILES.test(getTile(Math.floor(x), yo, Math.floor(z)))) break;
		if (yo <= height) {
			if (Math.distance(x, 0, z, noFalling.x, 0, noFalling.z) < 1) setPosition(getPlayerEnt(), noFalling.x, y, noFalling.z);
		} else noFalling.x = x, noFalling.z = z;
	}
	if (ladder) {
		var x = Math.floor(getPlayerX()), y = Math.floor(getPlayerY()), z = Math.floor(getPlayerZ());
		if (getTile(x, y - 1, z) == 65 && getTile(x, y - 2, z) == 65) {
			switch (Level.getData(x, y, z)) {
				case BlockFace.EAST: case BlockFace.WEST: setVelZ(getPlayerEnt(), 0); break;
				case BlockFace.NORTH: case BlockFace.SOUTH: setVelX(getPlayerEnt(), 0); break;
			}
			sprint.x = getPlayerX(), sprint.z = getPlayerZ();
		} else if (getTile(x, y - 1, z) == 106 && getTile(x, y - 2, z) == 106) {
			switch (Level.getData(x, y, z)) {
				case 1: case 4: setVelX(getPlayerEnt(), 0); break;
				case 2: case 8: setVelZ(getPlayerEnt(), 0); break;
			}
			sprint.x = getPlayerX(), sprint.z = getPlayerZ();
		}
	}
	if (web.web) web: {
		var x = Math.floor(getPlayerX()), y = Math.floor(getPlayerY()), z = Math.floor(getPlayerZ());
		if (pe) {
			if (!Player.isFlying()) {
				for (var wx = x - 1; wx <= x + 1; wx++) for (var wy = y - 2; wy <= y + 1; wy++) for (var wz = z - 1; wz <= z + 1; wz++) if (getTile(wx, wy, wz) == 30) {
					Player.setFlying(true);
					setVelY(getPlayerEnt(), -Player.ACCELERATION);
					break web;
				}
				Player.setFlying(false);
			}
		} else {
			for (var wx = x - 1; wx <= x + 1; wx++) for (var wy = y - 2; wy <= y + 1; wy++) for (var wz = z - 1; wz <= z + 1; wz++) if (getTile(wx, wy, wz) == 30) setTile(wx, wy, wz);
			web.th = false;
		}
	}
	if (sprint.vel != 0 || sprint.velY != 0) {
		if (sprint.vel != 0) if (pe) Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 2, sprint.vel); else {
			if (Entity.getHealth(getPlayerEnt()) <= 0) sprint.time = false;
			if (!sprint.time) sprint.x = getPlayerX(), sprint.z = getPlayerZ(); else {
				var x = getPlayerX(), z = getPlayerZ();
				if (Math.distance(x, 0, z, sprint.x, 0, sprint.z) < 1) {
					setVelX(getPlayerEnt(), (x - sprint.x) * sprint.vel);
					setVelZ(getPlayerEnt(), (z - sprint.z) * sprint.vel);
				}
			}
			sprint.time = !sprint.time;
		}
		if (sprint.velY != 0) Entity.addEffect(getPlayerEnt(), MobEffect.jump, 2, sprint.velY);
	}
	if (Player.insoluble != "|") {
		const PLAYER_VEL_Y = Entity.getVelY(getPlayerEnt());
		var tiles = new RegExp("^(" + Player.insoluble + ")$"), x = Math.floor(getPlayerX()), y = Math.floor(getPlayerY()), z = Math.floor(getPlayerZ());
		if (tiles.test(getTile(x, y - 2, z))) setVelY(getPlayerEnt(), Player.ACCELERATION); else if (PLAYER_VEL_Y < 0) {
			if (tiles.test(getTile(x, y - 3, z))) setVelY(getPlayerEnt(), -Player.ACCELERATION); else if (PLAYER_VEL_Y < -1) {
				if (tiles.test(getTile(x, y - 4, z))) setVelY(getPlayerEnt(), -Player.ACCELERATION); else if (PLAYER_VEL_Y < -2)
					if (tiles.test(getTile(x, y - 5, z))) setVelY(getPlayerEnt(), -Player.ACCELERATION);
			}
		}
	}
	for (var e in Entity.lockEffects.effects) Entity.addEffect(getPlayerEnt(), Entity.lockEffects.effects[e].type, 2, Entity.lockEffects.effects[e].lvl, TMI * Entity.lockEffects.showParticle, (1 - TMI) * Entity.lockEffects.showParticle);
	if (!/^(-1|0)$/.test(Target.ent)) if (Entity.getHealth(Target.ent) > 0 || Entity.getEntityTypeId(Target.ent) >= 64) {
		var rot = Target.getRot();
		setRot(getPlayerEnt(), rot.yaw, Target.doGetPitch ? rot.pitch : getPitch());
	} else Target.setTarget(-1);
	if (Scenter.scenter) if (!Scenter.isSearching) Scenter.saveNearestOre(Math.floor(getPlayerX()), Math.floor(getPlayerY()), Math.floor(getPlayerZ()));
	if (miner) {
		var x = getPlayerX(), y = getPlayerY(), z = getPlayerZ();
		for (var mx = x - 1; mx <= x + 1; mx++) for (var my = y - 1; my <= y + 1; my++) for (var mz = z - 1; mz <= z + 1; mz++) setTile(mx, my, mz);
	}
	if (pe) {
		if (featherFalling) if (Entity.getVelY(getPlayerEnt()) < -Player.ACCELERATION) Entity.addEffect(getPlayerEnt(), MobEffect.jump, 2, 65535);
		for (var p in ndt) try {
			Entity.addEffect(ndt[p], MobEffect.digSlowdown, 2, 127);
		}
		catch (err) {
		}
		if (quickBuilding.fillRoad) setTile(Math.floor(getPlayerX()), Math.floor(getPlayerY() - 2), Math.floor(getPlayerZ()), getCarriedItem(), Player.getCarriedItemData());
		if (Item.insoluble) {
			const E = Entity.getAll();
			var itemVelY = 0, x = 0, y = 0, z = 0;
			for (var e in E) if (Entity.getEntityTypeId(E[e]) == EntityType.ITEM) {
				itemVelY = Entity.getVelY(E[e]), x = Math.floor(Entity.getX(E[e])), y = Math.floor(Entity.getY(E[e])), z = Math.floor(Entity.getZ(E[e]));
				if (itemVelY < 0) {
					if (/^(10|11|51|81)$/.test(getTile(x, y - 1, z))) setVelY(E[e], -0.04); else if (itemVelY < -1)
						if (/^(10|11|51|81)$/.test(getTile(x, y - 2, z))) setVelY(E[e], -0.04);
				}
				if (/^(10|11|51|81)$/.test(getTile(x, y - 0.5, z))) setVelY(E[e], 0.16);
			}
		}
		if (!/^(-1|0)$/.test(entroller.ent)) {
			Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, 2);
			setRot(entroller.ent, getYaw(getPlayerEnt()), getPitch(getPlayerEnt()));
			setPosition(entroller.ent, getPlayerX(), getPlayerY() - 1.8, getPlayerZ());
			Entity.setHealth(entroller.ent, Entity.getHealth(getPlayerEnt()));
			Entity.setCarriedItem(entroller.ent, getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
			for (var s = 0; s < 4; s++) Entity.setArmor(entroller.ent, s, Player.getArmorSlot(), Player.getArmorSlotDamage());
			Entity.setSneaking(entroller.ent, Entity.isSneaking(getPlayerEnt()));
		}
		if (xpBottles.isThrowing) Level.spawnMob(xpBottles.pos.x, xpBottles.pos.y, xpBottles.pos.z, 68);
		if (lockTime > -1) Level.setTime(lockTime);
		if (lockWeather.lightning >= 0) Level.setLightningLevel(lockWeather.lightning);
		if (lockWeather.rain >= 0) Level.setRainLevel(lockWeather.rain);
		if (Level.destrocksByMock.threads.length > 0) {
			if (Level.destrocksByMock.cd % 10 != 0) {
				Level.destrocksByMock.cd--;
			} else {
				var index = Level.destrocksByMock.cd / 10;
				if (Level.destrocksByMock.threads[index].tiles.length > 0) {
					var tile = Level.destrocksByMock.threads[index].tiles[0];
					Level.destrockBySwitching(tile.x, tile.y, tile.z, true);
					Level.destrocksByMock.threads[index].tiles.splice(0, 1);
					if ("plokad" in Level.destrocksByMock.threads[index]) {
						var place = Level.destrocksByMock.threads[index].plokad;
						if (getTile(place.pos.x, place.pos.y, place.pos.z) == 0) setTile(place.pos.x, place.pos.y, place.pos.z, place.id, place.data);
					}
				}
				for (var t = 0; t < Level.destrocksByMock.threads.length; t++) {
					if (Level.destrocksByMock.cd > 0) Level.destrocksByMock.cd -= 10 - TMI * 2; else if (Level.destrocksByMock.threads.length > 0) Level.destrocksByMock.cd = Level.destrocksByMock.threads.length * 10 - 10 + TMI * 2; else break;
					if (Level.destrocksByMock.threads[(Level.destrocksByMock.cd - 2 * TMI) / 10].tiles.length > 0) break;
					Level.destrocksByMock.cd -= 2 * TMI;
				}
				if (t == Level.destrocksByMock.threads.length) Level.destrocksByMock.cd = 0;
			}
		}
		if (TMI) for (var r in Entity.be.ents) Entity.remove(Entity.be.ents[r]);
	} else {
		if (ld.rec) if (Entity.getHealth(getPlayerEnt()) <= 0) ld.pos = new Point(getPlayerX(), getPlayerY() + 1, getPlayerZ());
		if (atapil) if (Player.isPlayer(Player.getPointedEntity())) addPlayer(Player.getPointedEntity());
	}
	tipMessage: {
		if (Scenter.scenter) if (Scenter.showTime > 0) {
				ModPE.showTipMsgWithoutErr(isNaN(Scenter.distance) ? "未搜寻到矿物 请稍后再试" : Scenter.distance.toFixed(2) + "m");
				Scenter.showTime--;
				break tipMessage;
		}
		if (tipHp) {
			const PPE = Player.getPointedEntity();
			if ((!/^(-1|0)$/.test(PPE) || Entity.getEntityTypeId(ppe) > 0 && shl > 0)) {
				if (Entity.getEntityTypeId(PPE) < 64) {
					if (!/^(-1|0)$/.test(PPE)) ppe = PPE, shl = 60;
					const HP = Entity.getHealth(ppe), MAX_HP = Entity.getMaxHealth(ppe);
					var hp = "§4§l", maxHp = "§f§l";
					for (var h = 1; h <= Math.round(40 / MAX_HP * HP); h++) hp += "|";
					for (h = 1; h <= 40 - Math.round(40 / MAX_HP * HP); h++) maxHp += "|";
					ModPE.showTipMsgWithoutErr("entity: " + ppe + "\n" +
						"id: " + Entity.getEntityTypeId(ppe) + "\n" +
						"hp: " + HP + " / " + MAX_HP + " " + hp + maxHp);
					shl--;
				} else ModPE.showTipMsgWithoutErr("entity: " + PPE + "\n" +
					"id: " + Entity.getEntityTypeId(PPE));
				break tipMessage;
			}
		}
		if (tipTile) {
			const PBI = Player.getPointedBlockId();
			if (PBI > 0) {
				var n = "";
				try {
					n = Item.getName(PBI, Player.getPointedBlockData());
				}
				catch (err) {
				}
				ModPE.showTipMsgWithoutErr(PBI + ":" + (rd && PBI == 55 ? "§b" : "") + Player.getPointedBlockData() + "§r\n" +
					n);
				break tipMessage;
			}
		}
		if (rd) if (Player.getPointedBlockId() == 55) {
			ModPE.showTipMsgWithoutErr("power: §b" + Player.getPointedBlockData() + "§r");
			break tipMessage;
		}
		if (bl || tipPos.length > 0) {
			var poses = "";
			if (bl) poses = "bl: " + Math.floor(Level.getBrightness(getPlayerX(), getPlayerY(), getPlayerZ())) + " / 15\n";
			if (tipPos.length > 0) for (var p in tipPos) poses += Entity.getNameTag(tipPos[p]) + "§r: " + Math.floor(Entity.getX(tipPos[p])) + (tipPos[p] == getPlayerEnt() ? " " + Player.getCompass(0) : "") + ", " + Math.floor(Entity.getY(tipPos[p])) + ", " + Math.floor(Entity.getZ(tipPos[p])) + (tipPos[p] == getPlayerEnt() ? " " + Player.getCompass(1) : "") + "\n";
			ModPE.showTipMsgWithoutErr(poses);
			break tipMessage;
		}
	}
}

function newLevel() {
	pe = true, lan = true, usePlyrLst = true;
	if (pe && hbr.hbr) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
		hbr.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, Wnd.HEIGHT);
	}}));
}

paint.paint = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(paint.grass);
	checkbox.setText("点击" + ModPE.getI18nEx("tile.grass.name", true, true) + "染色");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		paint.grass = checked;
	}}));
	layout.addView(checkbox);
	var carriedColor = "";//Player.getItemCustomName(Player.getSelectedSlotId());
	if (getCarriedItem() == 0) {
		var text = new android.widget.TextView(CTX);
		text.setText("请先手持" + ModPE.getI18nEx("entity.Item.name", true));
		layout.addView(text);
	} else {
		if (isNaN(carriedColor) || carriedColor == "" || carriedColor == null) carriedColor = "000000";
		else carriedColor = argbToRgb(Number(carriedColor)).toString(16);
		carriedColor = new Array(7 - carriedColor.length).join(0) + carriedColor;
		var text = new android.widget.TextView(CTX);
		text.setText("工具");
		layout.addView(text);
		var rdoPencil = new android.widget.RadioButton(CTX);
		rdoPencil.setChecked(false);
		rdoPencil.setText("铅笔");
		rdoPencil.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) {
				Player.setItemCustomName(Player.getSelectedSlotId(), Number(edtColor.getText()));
				rdoPicker.setChecked(false);
			}
		}}));
		layout.addView(rdoPencil);
		var rdoPicker = new android.widget.RadioButton(CTX);
		rdoPicker.setChecked(false);
		rdoPicker.setText("取色器");
		rdoPicker.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) {
				Player.setItemCustomName(Player.getSelectedSlotId(), "picker");
				rdoPencil.setChecked(false);
			}
		}}));
		layout.addView(rdoPicker);
		var text = new android.widget.TextView(CTX);
		text.setText("颜色代码 [?]");
		text.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			var alert = new android.app.AlertDialog.Builder(CTX);
			alert.setTitle("颜色代码");
			alert.setMessage("支持\n\n" +
				"十进制 ARGB\n" + Int.MIN_VALUE + " ~ " + Int.MAX_VALUE + "\n\n" +
				"十六进制 ARGB\n-0x80000000 ~ 0x7fffffff\n\n" +
				"八进制 ARGB\n-020000000000 ~ 017777777777");
			alert.show();
		}}));
		layout.addView(text);
		var edtColor = new android.widget.EditText(CTX);
		edtColor.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
		edtColor.setText(String(Number("0x" + carriedColor) - 0x1000000));
		edtColor.setTextColor(Number(edtColor.getText()));
		edtColor.setLayoutParams(TEXT_PARAMS);
		layout.addView(edtColor);
		var lytRed = new android.widget.LinearLayout(CTX);
		layout.addView(lytRed);
		var text = new android.widget.TextView(CTX);
		text.setText("红色量");
		lytRed.addView(text);
		var edtRed = new android.widget.EditText(CTX);
		edtRed.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		edtRed.setText(String(Number("0x" + carriedColor.slice(-6, -4))));
		lytRed.addView(edtRed);
		var sekRed = new android.widget.SeekBar(CTX);
		sekRed.setMax(255);
		sekRed.setProgress(edtRed.getText());
		sekRed.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			const RED = String(sekRed.getProgress());
			if (edtRed.getText() != RED) edtRed.setText(RED);
			const COLOR = String(android.graphics.Color.argb(255, Number(edtRed.getText()), Number(edtGreen.getText()), Number(edtBlue.getText())));
			if (edtColor.getText() != COLOR) edtColor.setText(COLOR);
		}}));
		layout.addView(sekRed);
		edtRed.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			sekRed.setProgress(Number(s));
		}}));
		var lytGreen = new android.widget.LinearLayout(CTX);
		layout.addView(lytGreen);
		var text = new android.widget.TextView(CTX);
		text.setText("绿色量");
		lytGreen.addView(text);
		var edtGreen = new android.widget.EditText(CTX);
		edtGreen.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		edtGreen.setText(String(Number("0x" + carriedColor.slice(-4, -2))));
		lytGreen.addView(edtGreen);
		var sekGreen = new android.widget.SeekBar(CTX);
		sekGreen.setMax(255);
		sekGreen.setProgress(edtGreen.getText());
		sekGreen.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			const GREEN = String(sekGreen.getProgress());
			if (edtGreen.getText() != GREEN) edtGreen.setText(GREEN);
			const COLOR = String(android.graphics.Color.argb(255, Number(edtRed.getText()), Number(edtGreen.getText()), Number(edtBlue.getText())));
			if (edtColor.getText() != COLOR) edtColor.setText(COLOR);
		}}));
		layout.addView(sekGreen);
		edtGreen.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			sekGreen.setProgress(Number(s));
		}}));
		var lytBlue = new android.widget.LinearLayout(CTX);
		layout.addView(lytBlue);
		var text = new android.widget.TextView(CTX);
		text.setText("蓝色量");
		lytBlue.addView(text);
		var edtBlue = new android.widget.EditText(CTX);
		edtBlue.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		edtBlue.setText(String(Number("0x" + carriedColor.slice(-2))));
		lytBlue.addView(edtBlue);
		var sekBlue = new android.widget.SeekBar(CTX);
		sekBlue.setMax(255);
		sekBlue.setProgress(edtBlue.getText());
		sekBlue.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			const BLUE = String(sekBlue.getProgress());
			if (edtBlue.getText() != BLUE) edtBlue.setText(BLUE);
			const COLOR = String(android.graphics.Color.argb(255, Number(edtRed.getText()), Number(edtGreen.getText()), Number(edtBlue.getText())));
			if (edtColor.getText() != COLOR) edtColor.setText(COLOR);
		}}));
		layout.addView(sekBlue);
		edtBlue.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			sekBlue.setProgress(Number(s));
		}}));
		edtColor.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
			var color = Number(s);
			color = argbToRgb(color).toString(16);
			color = new Array(7 - color.length).join(0) + color;
			sekRed.setProgress(Number("0x" + color.slice(-6, -4)));
			sekGreen.setProgress(Number("0x" + color.slice(-4, -2)));
			sekBlue.setProgress(Number("0x" + color.slice(-2)));
			edtColor.setTextColor(Number(s));
			Player.setItemCustomName(Player.getSelectedSlotId(), Number(s));
		}}));
	}
	checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(paint.wool);
	checkbox.setText("染料点击" + ModPE.getI18nEx("tile.wool.name", true, true) + "染色");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		paint.wool = checked;
	}}));
	layout.addView(checkbox);
	checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(paint.clay);
	checkbox.setText("染料点击" + ModPE.getI18nEx("tile.clay.name", true, true) + "染色");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		paint.clay = checked;
	}}));
	layout.addView(checkbox);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndPaint = new android.widget.PopupWindow(scroll, Wnd.WIDTH * 2, Wnd.HEIGHT * 4, true);
	wndPaint.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndPaint.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Player.getCompass = function (dim) {
	switch (Math.floor((getYaw() + 45) / 90) % 4) {
		case 0: return "§c<§r §9^§r".split(" ")[dim];
		case 1: case -3: return "§cv§r §9<§r".split(" ")[dim];
		case 2: case -2: return "§c>§r §9v§r".split(" ")[dim];
		case 3: case -1: return "§c^§r §9>§r".split(" ")[dim];
	}
	return clientMessage(getYaw(getPlayerEnt()));
}

Player.haveItem = function () {
	for (var i = 9; i < 45; i++) if (Player.getInventorySlot(i) > 0) return true;
	for (var i = 0; i < 4; i++) if (Player.getArmorSlot(i) > 0) return true;
	return false;
}

Player.kill = function (player) {
	if (player == getPlayerEnt()) Player.setHealth(0); else {
		Entity.setHealth(player, 1);
		Entity.addEffect(player, MobEffect.wither, 2147483647, 127);
	}
}

Player.list = function () {
	return usePlyrLst ? list : Server.getAllPlayers();
}

Player.player = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText(ModPE.getI18n("options.fov"));
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("取値 0° ~ 359°");
	layout.addView(text);
	var lytFov = new android.widget.LinearLayout(CTX);
	layout.addView(lytFov);
	var edtFov = new android.widget.EditText(CTX);
	edtFov.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
	edtFov.setText("90");
	lytFov.addView(edtFov);
	var text = new android.widget.TextView(CTX);
	text.setText("°");
	lytFov.addView(text);
	var sekFov = new android.widget.SeekBar(CTX);
	sekFov.setMax(359);
	sekFov.setProgress(90);
	sekFov.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
		const FOV = view.getProgress();
		if (edtFov.getText() != FOV) edtFov.setText(String(FOV));
		ModPE.setFov(FOV);
	}}));
	layout.addView(sekFov);
	edtFov.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		sekFov.setProgress(Number(s) % 360);
	}}));
	var button = new android.widget.Button(CTX);
	button.setText("重置");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		ModPE.resetFov();
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText("经验 (XP)");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("取値 0级 ~ " + Int.MAX_VALUE + "级");
	layout.addView(text);
	var lytLvl = new android.widget.LinearLayout(CTX);
	layout.addView(lytLvl);
	var edtLvl = new android.widget.EditText(CTX);
	edtLvl.setText(String(Player.getLevel()));
	edtLvl.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		Player.setLevel(Number(s));
	}}));
	edtLvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytLvl.addView(edtLvl);
	var text = new android.widget.TextView(CTX);
	text.setText("级");
	lytLvl.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("操控");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	if (lan) {
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(pickTile);
		checkbox.setText("选取方块");
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			pickTile = checked;
		}}));
		layout.addView(checkbox);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Player.canFly());
	checkbox.setText("飞行");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Player.setCanFly(checked);
		if (checked && pe) if (Level.getGameMode() == 0) print("\n建议开启" + ModPE.getI18nEx("enchantment.protect.fall", true));
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(ctrller.ctrller);
	checkbox.setText("虛拟飞行器");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		ctrller.ctrller = checked;
		CTX.runOnUiThread(new java.lang.Runnable({run: function () {
			if (checked) {
				ctrller.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
				if (pe) if (Level.getGameMode() == 0) print("\n建议开启" + ModPE.getI18nEx("enchantment.protect.fall", true));
				Player.setFlying(false);
			} else {
				try {
					ctrller.window.dismiss();
				}
				catch (err) {
				}
			}
		}}));
	}}));
	layout.addView(checkbox);
	var chkUseItemToTp = new android.widget.CheckBox(CTX);
	chkUseItemToTp.setChecked(useItemToTp == 1);
	chkUseItemToTp.setText("点击方块传送");
	chkUseItemToTp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) chkUseItemForNoclip.setChecked(false);
		useItemToTp = Number(checked);
	}}));
	layout.addView(chkUseItemToTp);
	var chkUseItemForNoclip = new android.widget.CheckBox(CTX);
	chkUseItemForNoclip.setChecked(useItemToTp == 2);
	chkUseItemForNoclip.setText("点击方块穿墙");
	chkUseItemForNoclip.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) chkUseItemToTp.setChecked(false);
		useItemToTp = Number(checked) * 2;
	}}));
	layout.addView(chkUseItemForNoclip);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Player.insoluble.indexOf("8|9") > -1);
	checkbox.setText(ModPE.getI18nEx("tile.water.name", false, true) + "上行者");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			Player.insoluble = "8|9" + Player.insoluble;
			if (pe) if (Level.getGameMode() == 0) print("\n建议开启" + ModPE.getI18nEx("enchantment.protect.fall", true));
		} else Player.insoluble = Player.insoluble.replace("8|9", "");
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Player.insoluble.indexOf("10|11") > -1);
	checkbox.setText("轻功" + ModPE.getI18nEx("tile.flowing_lava.name", true, true) + "漂");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			Player.insoluble += "10|11";
			if (pe) if (Level.getGameMode() == 0) print("\n建议开启" + ModPE.getI18nEx("enchantment.protect.fall", true));
		} else Player.insoluble = Player.insoluble.replace("10|11", "");
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("疾跑");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("加速");
	layout.addView(text);
	var edtSprintXz = new android.widget.EditText(CTX);
	edtSprintXz.setText(String(sprint.vel));
	edtSprintXz.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		sprint.vel = Number(s);
		if (sprint.vel == 0 && sprint.velY == 0) sprint.time = false;
	}}));
	edtSprintXz.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL * ~pe);
	edtSprintXz.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtSprintXz);
	var text = new android.widget.TextView(CTX);
	text.setText("跳跃");
	layout.addView(text);
	var edtSprintY = new android.widget.EditText(CTX);
	edtSprintY.setText(String(sprint.velY));
	edtSprintY.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		sprint.velY = Number(s);
		if (sprint.vel == 0 && sprint.velY == 0) sprint.time = false;
	}}));
	edtSprintY.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtSprintY.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtSprintY);
	var button = new android.widget.Button(CTX);
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtSprintXz.setText("0");
		edtSprintY.setText("0");
	}}));
	button.setText("常速");
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		edtSprintXz.setText("1" + (pe ? "" : ".0"));
		edtSprintY.setText("1");
	}}));
	button.setText("加倍速");
	layout.addView(button);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Target.automatic);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Target.automatic = checked;
		if (checked) {
			Target.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, Wnd.HEIGHT * 2);
			Target.text.setTextColor(/^(-1|0)$/.test(Target.ent) ? android.graphics.Color.argb(255, 0, 255, 0) : android.graphics.Color.argb(255, 255, 0, 0));
		} else {
			Target.setTarget(-1);
			try {
				Target.window.dismiss();
			}
			catch (err) {
			}
		}
	}}));
	checkbox.setText("自动瞄准");
	checkbox.setTextSize(checkbox.getTextSize());
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Target.attackable);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Target.attackable = checked;
	}}));
	checkbox.setText("点击实体瞄准");
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Target.doGetPitch);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Target.doGetPitch = checked;
	}}));
	checkbox.setText("控制垂直旋转角度");
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("筛选实体");
	layout.addView(text);
	var edit = new android.widget.EditText(CTX);
	edit.setLayoutParams(TEXT_PARAMS);
	edit.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view, e) {
		var alert = new android.app.AlertDialog.Builder(CTX);
		alert.setTitle("根据实体名牌筛选实体");
		alert.setMessage("类型: 正则表达式;\n\n" +
			"例:\n" +
			"§c\t匹配红队玩家;\n" +
			"^.+$\t匹配有名牌的实体;\n" +
			"VIP\\+?\t匹配 VIP 及 VIP+ 的玩家.\n\n\n" +
			"什么是正则表达式?\n\n" +
			"维基百科: https://zh.wikipedia.org/wiki/正则表达式\n\n" +
			"百度百科: http://baike.baidu.com/link?url=VoQ_8d9Fusft7oNO7xYC9M-XgJ7tOPZ9NeAlh5klu80Y34Ri8IgUYVVxzceIMa4sTMo_vKp5Ed60KqGO4hMbCLVsYIMySMQopBCBUt4uN3BncHJV_RE_IJuzfcp1zG7dBCte9KqIT2zXfLkbgTcspK");
		alert.show();
		return true;
	}}));
	edit.setText(Target.regExp);
	edit.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		Target.regExp = s;
	}}));
	layout.addView(edit);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Target.i);
	checkbox.setText("忽略大小写");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Target.i = checked;
	}}));
	layout.addView(checkbox);
	var button = new android.widget.Button(CTX);
	button.setText("矿物追踪");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Scenter.options();
	}}));
	layout.addView(button);
	if (pe) {
		var text = new android.widget.TextView(CTX);
		text.setText("生命値 (HP)");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("取値 0点 ~ " + Int.MAX_VALUE + "点");
		layout.addView(text);
		var lytHp = new android.widget.LinearLayout(CTX);
		layout.addView(lytHp);
		var edtHp = new android.widget.EditText(CTX);
		edtHp.setText(String(Entity.getHealth(getPlayerEnt())));
		edtHp.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		lytHp.addView(edtHp);
		var text = new android.widget.TextView(CTX);
		text.setText("/" + Entity.getMaxHealth(getPlayerEnt()) + "条");
		lytHp.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			try {
				if (edtHp.getText() > Entity.getMaxHealth(getPlayerEnt())) Entity.setMaxHealth(getPlayerEnt(), edtHp.getText());
				Player.setHealth(edtHp.getText());
			}
			catch (err) {
				print(err);
			}
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText(ModPE.getI18n("potion.harm"));
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Player.setHealth(0);
			edtHp.setText("0");
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText(ModPE.getI18n("potion.heal"));
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			const MH = Entity.getMaxHealth(getPlayerEnt());
			Player.setHealth(MH);
			edtHp.setText(String(MH));
		}}));
		layout.addView(button);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(invulnerable);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		invulnerable = checked;
		if (!pe && !checked) {
			var alert = new android.app.AlertDialog.Builder(CTX);
			alert.setTitle("你要显形吗?");
			alert.setMessage("警告: 如果你已显形, 再次显形将导致永久死亡直到生命値更新.\n" +
				"如果你误选导致永久死亡, 你可以重新关闭此选项.");
			alert.setPositiveButton("确定", new android.content.DialogInterface.OnClickListener({onClick: function (dialog, w) {
				Player.setHealth(0);
			}}));
			alert.show();
		}
	}}));
	checkbox.setText(pe ? "无敌" : "死亡后" + ModPE.getI18nEx("potion.invisibility", true, true) + "旁观");
	if (!pe) checkbox.setTextSize(checkbox.getTextSize());
	layout.addView(checkbox);
	if (pe) {
		var text = new android.widget.TextView(CTX);
		text.setText("最大生命値");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("取値 0点 ~ " + Int.MAX_VALUE + "点");
		layout.addView(text);
		var lytMaxHp = new android.widget.LinearLayout(CTX);
		layout.addView(lytMaxHp);
		var edtMaxHp = new android.widget.EditText(CTX);
		edtMaxHp.setText(String(Entity.getMaxHealth(getPlayerEnt())));
		edtMaxHp.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		lytMaxHp.addView(edtMaxHp);
		var text = new android.widget.TextView(CTX);
		text.setText("点");
		lytMaxHp.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.setMaxHealth(getPlayerEnt(), edtMaxHp.getText());
		}}));
		layout.addView(button);
	}
	var text = new android.widget.TextView(CTX);
	text.setText("位置");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("x");
	layout.addView(text);
	var edtX = new android.widget.EditText(CTX);
	edtX.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	edtX.setLayoutParams(TEXT_PARAMS);
	edtX.setText(String(Math.floor(getPlayerX())));
	layout.addView(edtX);
	var text = new android.widget.TextView(CTX);
	text.setText("y");
	layout.addView(text);
	var edtY = new android.widget.EditText(CTX);
	edtY.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	edtY.setLayoutParams(TEXT_PARAMS);
	edtY.setText(String(Math.floor(getPlayerY())));
	layout.addView(edtY);
	var text = new android.widget.TextView(CTX);
	text.setText("z");
	layout.addView(text);
	var edtZ = new android.widget.EditText(CTX);
	edtZ.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	edtZ.setLayoutParams(TEXT_PARAMS);
	edtZ.setText(String(Math.floor(getPlayerZ())));
	layout.addView(edtZ);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		setPosition(getPlayerEnt(), Number(edtX.getText()), Number(edtY.getText()), Number(edtZ.getText()));
	}}));
	layout.addView(button);
	var text = new android.widget.TextView(CTX);
	text.setText("碰撞箱");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("宽度");
	layout.addView(text);
	var lytHitBoxW = new android.widget.LinearLayout(CTX);
	layout.addView(lytHitBoxW);
	var edtHitBoxW = new android.widget.EditText(CTX);
	edtHitBoxW.setText("0.6");
	edtHitBoxW.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
	lytHitBoxW.addView(edtHitBoxW);
	var text = new android.widget.TextView(CTX);
	text.setText("m");
	lytHitBoxW.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("高度");
	layout.addView(text);
	var lytHitBoxH = new android.widget.LinearLayout(CTX);
	layout.addView(lytHitBoxH);
	var edtHitBoxH = new android.widget.EditText(CTX);
	edtHitBoxH.setText("1.8");
	edtHitBoxH.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
	lytHitBoxH.addView(edtHitBoxH);
	var text = new android.widget.TextView(CTX);
	text.setText("m");
	lytHitBoxH.addView(text);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Entity.setCollisionSize(getPlayerEnt(), Number(edtHitBoxW.getText()), Number(edtHitBoxH.getText()));
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("穿墙");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Entity.setCollisionSize(getPlayerEnt(), 0, 0);
		edtHitBoxW.setText("0");
		edtHitBoxH.setText("0");
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("No-clip");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Entity.setCollisionSize(getPlayerEnt(), -1, -1);
		edtHitBoxW.setText("-1");
		edtHitBoxH.setText("-1");
		print("\n建议开启飞行幷关闭防止方块窒息");
	}}));
	layout.addView(button);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(noFalling.noFalling);
	checkbox.setText("拦截跳悬崖");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		noFalling.noFalling = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("悬崖髙度");
	layout.addView(text);
	var lytNoFalling = new android.widget.LinearLayout(CTX);
	layout.addView(lytNoFalling);
	var edit = new android.widget.EditText(CTX);
	edit.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edit.setText(String(noFalling.height));
	edit.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		noFalling.height = Number(s);
	}}));
	lytNoFalling.addView(edit);
	var text = new android.widget.TextView(CTX);
	text.setText("m");
	lytNoFalling.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("辅助");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(esc);
	checkbox.setText("防止方块窒息");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		esc = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(ladder);
	checkbox.setText("穏定爬" + ModPE.getI18nEx("tile.ladder.name", true));
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		ladder = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(web.web);
	checkbox.setText("零粘性的" + ModPE.getI18nEx("tile.web.name", true));
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		web.web = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(miner);
	checkbox.setText("开路");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			var alert = new android.app.AlertDialog.Builder(CTX);
			alert.setTitle("你确定要开路吗");
			alert.setMessage("这可能会" + (pe ? "永远损失方块" : "使你受伤") + ".");
			alert.setPositiveButton("确定", new android.content.DialogInterface.OnClickListener({onClick: function (dialog, w) {
				miner = true;
			}}));
			alert.setNegativeButton("取消", new android.content.DialogInterface.OnClickListener({onClick: function (dialog, w) {
				view.setChecked(false);
			}}));
			alert.show();
		} else miner = false;
	}}));
	layout.addView(checkbox);
	if (pe) {
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(featherFalling);
		checkbox.setText(ModPE.getI18n("enchantment.protect.fall"));
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			featherFalling = checked;
		}}));
		layout.addView(checkbox);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(qsc);
		checkbox.setText("快速填箱");
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			qsc = checked;
		}}));
		layout.addView(checkbox);
	}
	if (lan) {
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(ki.ki);
		checkbox.setText("死亡防喷");
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			ki.ki = checked;
			if (checked && TMI) print("\n使用 Toolbox 无法保留附魔魔咒");
		}}));
		layout.addView(checkbox);
	}
	var text = new android.widget.TextView(CTX);
	text.setText("选项");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var button = new android.widget.Button(CTX);
	button.setText("夜视");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		var alert = new android.app.AlertDialog.Builder(CTX);
		alert.setTitle("无限夜视敎程");
		alert.setMessage("1\t退出游戏;\n" +
			"2\t在 [内存卡目彔: " + new android.os.Environment.getExternalStorageDirectory() + "] /games/com.mojang/minecraftpe/options.txt 中将 gfx_gamma: 后边的数改为 15;\n" +
			"3\t运行游戏, 切勿在 [" + ModPE.getI18n("options.title") + "] 中改变 [" + ModPE.getI18n("options.gamma") + "].");
		alert.show();
	}}));
	layout.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("运行游戏自动载入存档");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		var alert = new android.app.AlertDialog.Builder(CTX);
		alert.setTitle("自动载入存档敎程");
		alert.setMessage("1\t退出游戏;\n" +
			"2\t在 [内存卡目彔: " + new android.os.Environment.getExternalStorageDirectory() + "] /games/com.mojang/minecraftpe/options.txt 中将 dev_autoloadlevel: 后边的数改为 1;\n" +
			"3\t运行游戏.");
		alert.show();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

Player.players = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var toggle = new android.widget.ToggleButton(CTX);
	toggle.setTextOff("自动");
	toggle.setTextOn("使用手动玩家列表");
	toggle.setChecked(usePlyrLst);
	toggle.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		usePlyrLst = checked;
		wndPlayers.dismiss();
		Player.players();
	}}));
	layout.addView(toggle);
	if (usePlyrLst) {
		var chkAtapil = new android.widget.CheckBox(CTX);
		chkAtapil.setText((pe ? "点击" : "准星指向") + "玩家以添加至列表");
		chkAtapil.setChecked(atapil);
		chkAtapil.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			atapil = checked;
		}}));
		layout.addView(chkAtapil);
	} else {
		var button = new android.widget.Button(CTX);
		button.setText("覆盖手动玩家列表");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			list = [];
			const P = Player.list();
			for (var p in P) list.push(P[p]);
			if (("," + list.join() + ",").indexOf("," + getPlayerEnt() + ",") <= -1) list.push(getPlayerEnt());
		}}));
		layout.addView(button);
	}
	var lytPlyrs = new android.widget.LinearLayout(CTX);
	lytPlyrs.setOrientation(lytPlyrs.VERTICAL);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(lytPlyrs);
	layout.addView(scroll);
	var button;
	if (usePlyrLst) for (var p = 0; p < list.length; p++) {
		if (!Player.isPlayer(list[p]) && ("," + tipPos.join() + ",").indexOf("," + list[p] + ",") == -1) {
			list.splice(p, 1);
			p--;
		}
	} else for (var p in tipPos) if (!Player.isPlayer(tipPos[p])) {		
		button = new android.widget.Button(CTX);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Player.plyrMnu(Number(view.getText().split("\n")[0]));
		}}));
		button.setText(tipPos[p] + "\n" + "不在范围内");
		lytPlyrs.addView(button);
	}
	const P = Player.list();
	for (var p in P) {
		if (!pe && p > 0) if (P[p] == P[0]) break;
		button = new android.widget.Button(CTX);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Player.plyrMnu(Number(view.getText().split("\n")[0]));
		}}));
		button.setText(P[p] + "\n" + (Player.isPlayer(P[p]) ? Player.getName(P[p]).replace(/§./g, "") : "不在范围内"));
		lytPlyrs.addView(button);
	}
	wndPlayers = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndPlayers.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndPlayers.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

Player.plyrMnu = function (player) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function () {
		CTX.getSystemService(CTX.CLIPBOARD_SERVICE).setText(Player.getName(player));
		print("\n已复制");
		return true;
	}}));
	text.setText(android.text.Html.fromHtml(Player.getName(player).toHtml()));
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("标识码");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function () {
		CTX.getSystemService(CTX.CLIPBOARD_SERVICE).setText(String(player));
		print("\n已复制");
		return true;
	}}));
	text.setText(String(player));
	layout.addView(text);
	var button = new android.widget.Button(CTX);
	if (!Player.isPlayer(player)) button.setEnabled(false);
	button.setText("传送");
	button.setTextSize(button.getTextSize());
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		Player.tp2p(player);
	}}));
	layout.addView(button);
	if (pe) {
		var text = new android.widget.TextView(CTX);
		text.setText("生命値 (HP)");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("取値 0点 ~ " + Int.MAX_VALUE + "点");
		layout.addView(text);
		var lytHp = new android.widget.LinearLayout(CTX);
		layout.addView(lytHp);
		var edtHp = new android.widget.EditText(CTX);
		edtHp.setText(String(Entity.getHealth(player)));
		edtHp.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		lytHp.addView(edtHp);
		var text = new android.widget.TextView(CTX);
		text.setText("/ " + Entity.getMaxHealth(player) + "条");
		lytHp.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			if (Entity.getMaxHealth(player) < edtHp.getText()) Entity.setMaxHealth(player, edtHp.getText());
			if (edtHp.getText() > 0) Entity.setHealth(player, edtHp.getText()); else Player.kill(player);
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText(ModPE.getI18n("potion.heal"));
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			const MH = Entity.getMaxHealth(player);
			Entity.setHealth(player, MH);
			edtHp.setText(String(MH));
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("给予" + ModPE.getI18nEx("entity.Item.name", true));
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			addItem(player, 2);
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("生成实体");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.spawn(Entity.getX(player), Entity.getY(player), Entity.getZ(player), 2);
		}}));
		layout.addView(button);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(("," + tipPos.join() + ",").indexOf("," + player + ",") > -1);
	checkbox.setText("显示坐标");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) tipPos.push(player); else for (var p in tipPos) if (tipPos[p] ==  player) tipPos.splice(p, 1);
	}}));
	layout.addView(checkbox);
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("投掷经验瓶");
		button.setTextSize(button.getTextSize());
		button.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (view, event) {
			switch (event.getAction()) {
				case event.ACTION_DOWN:
					xpBottles = {isThrowing: true, pos: new Point(Entity.getX(player), Entity.getY(player), Entity.getZ(player))};
					break;
				case event.ACTION_UP:
					xpBottles.isThrowing = false;
					break;
			}
			return false;
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("效果");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.effect(player);
		}}));
		layout.addView(button);
		var text = new android.widget.TextView(CTX);
		text.setText("点燃");
		text.setTextSize(text.getTextSize());
		layout.addView(text);
		var text = new android.widget.TextView(CTX);
		text.setText("持续时间\n" +
			"取値 0s ~ 2040109465s");
		layout.addView(text);
		var lytFire = new android.widget.LinearLayout(CTX);
		layout.addView(lytFire);
		var edtFire = new android.widget.EditText(CTX);
		edtFire.setText("0");
		edtFire.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		lytFire.addView(edtFire);
		var text = new android.widget.TextView(CTX);
		text.setText("s");
		lytFire.addView(text);
		var button = new android.widget.Button(CTX);
		button.setText("OK");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Entity.setFireTicks(player, edtFire.getText());
		}}));
		layout.addView(button);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(Target.ent == player);
	if (!Player.isPlayer(player)) checkbox.setEnabled(false);
	checkbox.setText("瞄准");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Target.setTarget(checked ? player : -1);
	}}));
	layout.addView(checkbox);
	var button = new android.widget.Button(CTX);
	if (!Player.isPlayer(player)) button.setEnabled(false);
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		ModPE.scor(player, true);
	}}));
	button.setText("旁观");
	button.setTextSize(button.getTextSize());
	layout.addView(button);
	if (pe) {
		var button = new android.widget.Button(CTX);
		if (!Player.isPlayer(player)) button.setEnabled(false);
		button.setText("骑行");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			rideAnimal(getPlayerEnt(), player);
		}}));
		layout.addView(button);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(("," + ndt.join() + ",").indexOf("," + player + ",") > -1);
		checkbox.setText("禁止破坏");
		checkbox.setTextSize(checkbox.getTextSize());
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) ndt.push(player); else for (var p in ndt) if (ndt[p] == player) ndt.splice(p, 1);
		}}));
		layout.addView(checkbox);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(("," + nvtm.join() + ",").indexOf("," + player + ",") > -1);
		checkbox.setText("禁止攻击");
		checkbox.setTextSize(checkbox.getTextSize());
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) nvtm.push(player); else for (var p in nvtm) if (nvtm[p] == player) nvtm.splice(p, 1);
		}}));
		layout.addView(checkbox);
		var button = new android.widget.Button(CTX);
		button.setText("长按此处以\n" + ModPE.getI18n("potion.harm"));
		button.setTextSize(button.getTextSize());
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			Player.kill(player);
			return true;
		}}));
		layout.addView(button);
		var button = new android.widget.Button(CTX);
		button.setText("长按此处以\n踢出游戏");
		button.setTextSize(button.getTextSize());
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			Entity.remove(player);
			wndSelPlyr.dismiss();
			wndPlayers.dismiss();
			Player.players();
			return true;
		}}));
		layout.addView(button);
	}
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndSelPlyr = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndSelPlyr.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndSelPlyr.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Player.tp2p = function (player) {
	const X = Entity.getX(player), Y = Entity.getY(player), Z = Entity.getZ(player);
	if (!isNaN(X) && !isNaN(Y) && !isNaN(Z)) setPosition(getPlayerEnt(), X, Y, Z); else print("距离过远");
}

function Point(x, y, z) {
	this.x = x === undefined ? NaN : x, this.y = y === undefined ? NaN : y, this.z = z === undefined ? NaN : z;
}

function popupWindow() {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("平视显示器 (HUD)");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setText("全透明的 [悬浮窗]");
	checkbox.setChecked(txtMnu.getText() == "");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		wndPw.dismiss();
		wndMnu.dismiss();
		wndMnuTxt.dismiss();
		showMnuTxt(checked);
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setText("锁定 [悬浮窗] 位置");
	checkbox.setChecked(locked);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		locked = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setText("设置死亡介面的 [" + ModPE.getI18n("deathScreen.quit") + "] 无效");
	checkbox.setChecked(respawn.respawn);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		respawn.respawn = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setText("汉化 Toolbox");
	checkbox.setChecked(doLangEdit);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		doLangEdit = checked;
		if (checked) langEdit();
	}}));
	layout.addView(checkbox);
	var toggle = new android.widget.ToggleButton(CTX);
	toggle.setTextOff("提示讯息: 自动");
	toggle.setTextOn("提示讯息: 使用 android 介面");
	toggle.setChecked(ModPE.stim);
	toggle.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		ModPE.stim = checked;
	}}));
	toggle.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view, e) {
		ModPE.showTipMsgWithoutErr("此为提示讯息");
		return true;
	}}));
	layout.addView(toggle);
	var text = new android.widget.TextView(CTX);
	text.setText("主题");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var rdoBasic = new android.widget.RadioButton(CTX);
	rdoBasic.setChecked(theme == 1);
	rdoBasic.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			rdoHolo.setChecked(false);
			rdoMaterial.setChecked(false);
			theme = 1;
			CTX.setTheme(android.R.style.Theme_Light);
		}
	}}));
	rdoBasic.setText("Basic")
	layout.addView(rdoBasic);
	if (android.os.Build.VERSION.SDK_INT >= 11) {
		var rdoHolo = new android.widget.RadioButton(CTX);
		rdoHolo.setChecked(theme == 3);
		rdoHolo.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) {
				rdoBasic.setChecked(false);
				rdoMaterial.setChecked(false);
				theme = 3;
				CTX.setTheme(android.R.style.Theme_Holo_Light);
			}
		}}));
		rdoHolo.setText("Holo")
		layout.addView(rdoHolo);
		if (android.os.Build.VERSION.SDK_INT >= 21) {
			var rdoMaterial = new android.widget.RadioButton(CTX);
			rdoMaterial.setChecked(theme == 5);
			rdoMaterial.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
				if (checked) {
					rdoBasic.setChecked(false);
					rdoHolo.setChecked(false);
					theme = 5;
					CTX.setTheme(android.R.style.Theme_Material_Light);
				}
			}}));
			rdoMaterial.setText("Material")
			layout.addView(rdoMaterial);
		}
	}
	var text = new android.widget.TextView(CTX);
	text.setText("永远启动的修改");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var toggle = new android.widget.ToggleButton(CTX);
	toggle.setTextOff("线程: 跟随游戏");
	toggle.setTextOn("线程: 新线程");
	toggle.setChecked(ModTick.type);
	toggle.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		ModTick.type = checked;
		edtSpeed.setEnabled(checked);
		if (checked && isInGame) ModTick.forTick();
	}}));
	toggle.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view, e) {		
		var alert = new android.app.AlertDialog.Builder(CTX);
		alert.setTitle("修改线程");
		alert.setMessage("跟随游戏:\n" +
			"游戏每更新一次 (modTick) 卽运行一次修改. 可能会造成游戏卡顿.\n" +
			"速度: 游戏速度, 可在 [游戏] > [游戏速度 (TPS)] 中修改. 单位: 刻每秒 (t/s)\n" +
			"\n" +
			"新线程:\n" +
			"使用新的线程来运行修改. 不会影响游戏的流畅性.\n" +
			"速度: 两次运行的间隔时间. 单位: 纳秒每刻 (ns/t)\n" +
			"1s = 10⁹ns");
		alert.show();
		return true;
	}}));
	layout.addView(toggle);
	var text = new android.widget.TextView(CTX);
	text.setText("速度\n取値 0ns/t ~ 922337203685477582847483647ns/t");
	layout.addView(text);
	var lytSpeed = new android.widget.LinearLayout(CTX);
	layout.addView(lytSpeed);
	var edtSpeed = new android.widget.EditText(CTX);
	edtSpeed.setEnabled(ModTick.type);
	edtSpeed.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtSpeed.setText(String(ModTick.speed.millis * 1000000 + ModTick.speed.nanos));
	edtSpeed.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		ModTick.speed = {millis: Math.floor(Number(s) / 1000000), nanos: Number(s) % 1000000};
	}}));
	lytSpeed.addView(edtSpeed);
	var text = new android.widget.TextView(CTX);
	text.setText("ns/t");
	lytSpeed.addView(text);
	if (isInGame) {
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(rotatroller.controller);
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			rotatroller.controller = checked;
			if (checked) {
				rotatroller.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, Wnd.WIDTH * 2.5, Wnd.HEIGHT * 2.5);
				rotatroller.window.setWidth(Wnd.WIDTH);
				rotatroller.window.setHeight(Wnd.HEIGHT);
			} else {
				try {
					rotatroller.window.dismiss();
				}
				catch (err) {
				}
			}
		}}));
		checkbox.setText("虛拟搖杆");
		checkbox.setTextSize(checkbox.getTextSize());
		layout.addView(checkbox);
		var text = new android.widget.TextView(CTX);
		text.setText(ModPE.getI18n("options.sensitivity") + ": " + rotatroller.sensitivity);
		layout.addView(text);
		var seekbar = new android.widget.SeekBar(CTX);
		seekbar.setMax(20);
		seekbar.setProgress(rotatroller.sensitivity * 10);
		seekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (view) {
			text.setText(ModPE.getI18n("options.sensitivity") + ": " + view.getProgress() / 10);
			rotatroller.sensitivity = view.getProgress() / 10;
		}}));
		layout.addView(seekbar);
		var checkbox = new android.widget.CheckBox(CTX);
		checkbox.setChecked(rotatroller.invertYaxis);
		checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			rotatroller.invertYaxis = checked;
		}}));
		checkbox.setText(ModPE.getI18n("options.invertYAxis"));
		layout.addView(checkbox);
	}
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndPw = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndPw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndPw.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

ports.add = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("新增");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var edtNew = new android.widget.EditText(CTX), n = 0;
	for (n = ports.ports.name.length; true; n++) if (ports.ports.name.join().search("p" + n) == -1) break;
	edtNew.setText("p" + n);
	edtNew.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtNew);
	var text = new android.widget.TextView(CTX);
	text.setText("x");
	layout.addView(text);
	var edtX = new android.widget.EditText(CTX);
	edtX.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	edtX.setText(String(Math.floor(getPlayerX())));
	edtX.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtX);
	var text = new android.widget.TextView(CTX);
	text.setText("y");
	layout.addView(text);
	var edtY = new android.widget.EditText(CTX);
	edtY.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	edtY.setText(String(Math.floor(getPlayerY())));
	edtY.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtY);
	var text = new android.widget.TextView(CTX);
	text.setText("z");
	layout.addView(text);
	var edtZ = new android.widget.EditText(CTX);
	edtZ.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
	edtZ.setText(String(Math.floor(getPlayerZ())));
	edtZ.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtZ);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (("," + ports.ports.name.join() + ",").indexOf("," + edtNew.getText() + ",") == -1) {
			ports.ports.name.push(edtNew.getText());
			ports.ports.pos.push(edtX.getText() + " " + edtY.getText() + " " + edtZ.getText());
		}
		wndAddPorts.dismiss();
		wndPorts.dismiss();
		ports.pm();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var wndAddPorts = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndAddPorts.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndAddPorts.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

ports.pm = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	if (pe) {
		var button = new android.widget.Button(CTX);
		button.setText("设置重生点");
		button.setTextSize(button.getTextSize());
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
		}}));
		layout.addView(button);
	}
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(ld.rec);
	checkbox.setText("记彔最近的死亡点");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		ld.rec = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("记彔点");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("长按以刪除");
	layout.addView(text);
	var scroll = new android.widget.ScrollView(CTX);
	layout.addView(scroll);
	var lytPorts = new android.widget.LinearLayout(CTX);
	lytPorts.setOrientation(lytPorts.VERTICAL);
	scroll.addView(lytPorts);
	var button = new android.widget.Button(CTX);
	button.setText("+\n");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		ports.add();
	}}));
	lytPorts.addView(button);
	if (!isNaN(ld.pos.x) && !isNaN(ld.pos.y) && !isNaN(ld.pos.z)) {
		var button = new android.widget.Button(CTX);
		button.setText("最近的死亡点\n");
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			setPosition(getPlayerEnt(), ld.pos.x, ld.pos.y, ld.pos.z);
		}}));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			ld.pos = new Point();
			wndPorts.dismiss();
			ports.pm();
			return true;
		}}));
		lytPorts.addView(button);
	}
	for (var p in ports.ports.name) {
		var button = new android.widget.Button(CTX);
		button.setText(p + "\n" + ports.ports.name[p]);
		button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			const I = view.getText().split("\n")[0];
			setPosition(getPlayerEnt(), ports.ports.pos[I].split(" ")[0], ports.ports.pos[I].split(" ")[1], ports.ports.pos[I].split(" ")[2]);
		}}));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			const I = view.getText().split("\n")[0];
				ports.ports.name.splice(I, 1);
				ports.ports.pos.splice(I, 1);
			wndPorts.dismiss();
			ports.pm();
			return true;
		}}));
		lytPorts.addView(button);
	}
	wndPorts = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndPorts.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndPorts.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

function procCmd(cmd) {
	cmd = cmd.trim();
	const DATA = cmd.split(" ");
	switch (DATA[0].toLowerCase()) {
		case "banitem":
		case "bi":
		case "bl":
		case "brightnesslevel":
		case "gamma":
		case "carrotonastick":
		case "cs":
		case "clear":
		case "clone":
		case "compass":
		case "cp":
		case "effect":
		case "ench":
		case "enchant":
		case "endereye":
		case "esc":
		case "escape":
		case "eval":
		case "fill":
		case "fly":
		case "gamemode":
		case "gm":
		case "give":
		case "gc":
		case "grasscolor":
		case "hat": break;
		case "?":
		case "help":
			/*const HELP = [
				"§f在本指令帮助手冊中标§4红色§f处为入别人世界时不可用; 标§e黄色§f处为入别人世界时该参数部分取値不可用.",
				"§f本 JS 主要功能: §4禁用" + ModPE.getI18nEx("entity.Item.name", true) + "§f, 1m 高的玩家, §4防弹§f, 死亡防喷, §4" + ModPE.getI18nEx("entity.Mob.name", false, true) + "命名§f, §4隠藏玩家名字§f, §4吿示牌内容无数行§f等.",
				"§f本 JS 常用指令: §4/bi 325:10§f, /ench, /fly, /gm 1, /give 0 264 255, /il 256 319, /ki true, /tp 1, /who, §4/xp 200 1§f, /xp 30L 等.",
				"§f所有指令仅限 V16.5.28 以下的版本, 该版本及以上版本的指令功能全部被悬浮窗取代.",
				"§4/banitem add | del <§oid§r§4>[:§odamage§r§4]",
				"§f禁止玩家使用" + ModPE.getI18nEx("entity.Item.name", true) + ". 例: /bi add 51, /bi add 259, 禁止玩家纵火; /bi add 10, /bi add 11, /bi add 325:10, 禁止玩家放岩浆. 等价指令: /bi.",
				"§f/bl",
				"§f切换永远显示自己位置的亮度. 等价指令: /brightnesslevel, /gamma.",
				"§4/carrotonastick <§ofalse§r§4 | §otrue§r§4> [§ovel§r§4]",
				"§f自己骑行的" + ModPE.getI18nEx("entity.Mob.name", true, true) + "向前走. 等价指令: /cs.",
				"§f/clear [§oid§r] [§odamage§r]",
				"§f淸除自己的" + ModPE.getI18nEx("container.inventory", true) + ". 若 id 未被指定或为 -1 则淸除所有" + ModPE.getI18nEx("entity.Item.name", true) + "; 若 damage 未被指定或为 -1 则淸除所有 ID 为 id 的所有" + ModPE.getI18nEx("entity.Item.name", true) + ". 例: /clear -1 1, 淸除所有损害値为 1 的" + ModPE.getI18nEx("entity.Item.name", true) + ".",
				"§4/clone <§ox1§r§4> <§oy1§r§4> <§oz1§r§4> <§ox2§r§4> <§oy2§r§4> <§oz2§r§4> <§ox§r§4> <§oy§r§4> <§oz§r§4>",
				"§f克隆从 (x1, y1, z1) ~ (x2, y2, z2) 的方块到 x, y, z.",
				"§f/compass",
				"§f显示立体直角坐标系. 等价指令: /cp.",
				"§f/editor,",
				"§f显示本 js 作者.",
				"§f/effect §e<§oplayerId§r§e>§f §e<§oid§r§e>§f | §e...§f | clear [§oduration§r | 0] [§oamplifier§r] [§ohideParticle§r] §4[§oforVictims§r§4]§f",
				"§f添加或淸除效果. id 取数字 ID 或 英文 ID; ...: 浏览效果; duration 取値 0 ~ " + Int.MAX_VALUE + ", 黙认为 60; 0: 移除效果; amplifier 取値 " + Int.MIN_VALUE + " ~ " + Int.MAX_VALUE + ", 黙认为 0; hideParticle 取値 false 或 true; forVictims: 效果用于攻击, 取値 false 或 true. 例: /effect 0 movementSpeed 60 15, 给予自己 16 级的速度效果持续 30 秒幷显示粒子.",
				"§f/ench [§oid§r | ...] [§olvl§r]",
				"§f附魔手持" + ModPE.getI18nEx("entity.Item.name", true) + ". id 取数字 ID 或英文 ID, 若未指定则附魔该" + ModPE.getI18nEx("entity.Item.name", true, true) + "所有常用的魔咒; ...: 浏览魔咒; lvl 取値 " + Short.MIN_VALUE + " ~ " + Short.MAX_VALUE + ", 黙认为 " + Short.MAX_VALUE + ". 等价指令: /enchant.",
				"§4/endereye <§ofalse§r§4 | §otrue§r§4>",
				"§f当点击终界传送门时放置终界之眼.",
				"§f/esc <§ofalse§r | §otrue§r>",
				"§f自动逃出使人窒息的方块. 等价指令: /escape.",
				"§f/eval [§oexpression§r]",
				"§f快速计算器. 例: /eval 1 + 1.",
				"§4/fill <§ox1§r§4> <§oy1§r§4> <§oz1§r§4> <§ox2§r§4> <§oy2§r§4> <§oz2§r§4> <§oid§r§4> [§odata§r§4]",
				"§f填充方块.",
				"§f/fly",
				"§f切换飞行.",
				"§f/gamemode <§ogameMode§r>",
				"§f设置游戏模式. gameMode 取値 0 或 1. 等价指令: /gm.",
				"§f/give §e<§oplayerId§r§e>§f <§oid§r> [§oamount§r] [§odamage§r]",
				"§f给予玩家" + ModPE.getI18nEx("entity.Item.name", true) + ". id 取数字 ID 或英文 ID; amount 黙认为 1, 提示: 每格" + ModPE.getI18nEx("container.inventory", true, true) + "容量为 255 个" + ModPE.getI18nEx("entity.Item.name", true) + ". 例; /give 0 item.diamond 255.",
				"§4/grasscolor <§ocolor§r§4> | grassdye,",
				"§f给自己所在的 y 坐标上所有的草地等绿色植物染色. color: 取値 0 ~ 16777215 或 0xRRGGBB, R: 红, G: 绿, B: 蓝, R, B, G 为两位十六进制数字; grassdye: 切换允许使用染料点击草地染色, 名字为颜色代码的" + ModPE.getI18nEx("entity.Item.name", true, true) + "作为自定义染料, 名字为 picker 的" + ModPE.getI18nEx("entity.Item.name", true, true) + "作为取色器, 在超平坦类型世界中名字为 eraser 的" + ModPE.getI18nEx("entity.Item.name", true, true) + "作为橡皮擦. 例: /gc 0xff77bb, 将草地染为粉红色. 等价指令: /gc.",
				"§f/hat",
				"§f将手持的方块或头盔戴在头上.",
				"§f/help [§opage§r | §ocommand§r]",
				"§f显示帮助. command: 显示对该指令的用法. 等价指令: /?.",
				"§4/herobrinesblazerod <§ofalse§r§4 | §otrue§r§4>",
				"§fHerobrine 的烈焰棒. 等价指令: /hbr.",
				"§e/hitbox <§owidth§r§e> <§oheight§r§e>",
				"§f设置自己的碰撞箱. 例: /hitbox 0 0, 设置自己身高为 1m 幷永远防弹幷允许穿墙. 等价指令: /collisionsize.",
				"§4/hp <§ofalse§r§4 | §otrue§r§4> | e | p <§ohealth§r§4>",
				"§f设置" + ModPE.getI18nEx("entity.Mob.name", true, true) + "生命値. false, true: 当点击" + ModPE.getI18nEx("entity.Mob.name", true, true) + "时设置该" + ModPE.getI18nEx("entity.Mob.name", true, true) + "生命値; e: 生命値设置对象为除自己以外的" + ModPE.getI18nEx("entity.Mob.name", true) + "; p: 血量设置对象为自己; health 取値 " + Int.MIN_VALUE + " ~ " + Int.MAX_VALUE + ". 等价指令: /healthpoint.",
				"§f/idlist chat | effect | ench | ent | item | tile | <§oname§r>",
				"§f显示 ID 列表. name: 英文 ID 翻译为数字 ID. 等价指令: /il.",
				"§4/im <§ofalse§r§4 | §otrue§r§4>",
				"§f无敌模式.",
				"§4/ivty armor | carried | cancel",
				"§f当点击实体时使用手持" + ModPE.getI18nEx("entity.Item.name", true, true) + "装备该实体. armor: 盔甲; carried: 手持" + ModPE.getI18nEx("entity.Item.name", true) + "; cancel: 取消操作. 仅限于: 骷髅, 僵尸猪人, 玩家. 等价指令: /inventory.",
				"§f/ki false | true | r | w | <§oseconds§r>",
				"§f死亡防喷. false, true: 自动读取记彔或将" + ModPE.getI18nEx("entity.Item.name", true, true) + "栏写入记彔; r: 读取记彔; w: 将" + ModPE.getI18nEx("entity.Item.name", true, true) + "栏写入记彔; seconds: 自动读取记彔或写入记彔的频率, 最小取値为 0.05, 若小于该値则视为该値. 通常开游戏后第一次入别人世界后输入 /ki true 就不必再理会该指令. 等价指令: /keepinventory.",
				"§4/kick <§oplayerId§r§4>",
				"§f将玩家踢出游戏.",
				"§4/kill [§oplayerId§r§4]",
				"§f杀死玩家. 若玩家不为主机则玩家必须在生存模式下. 若未指定 playerId 则自杀.",
				"§f/list",
				"§f显示玩家列表及査询玩家 ID. 若玩家不在列表上则点击玩家 (生存模式下先输入 /nvtm 0 防止伤及玩家) 以添加玩家至列表. 等价指令: /playerlist, /plist, /who.",
				"§f/m",
				"§f显示悬浮窗.",
				"§4/nametag <§ofalse§r§4 | §otrue§r§4> | set [§onameTag§r§4]",
				"§f点击" + ModPE.getI18nEx("entity.Mob.name", true, true) + "命名. 等价指令: /nt.",
				"§4/ndt <§oplayerId§r§4>",
				"§f禁止玩家破坏方块. 玩家必须在生存模式下. 等价指令: /nodestroyingtile",
				"§4/nvtm <§oplayerId§r§4>",
				"§f禁止指定玩家攻击. 等价指令: /novictim",
				"§4/onfire <§oticks§r§4>",
				"§f设置玩家准星指向的实体着火. 若 ticks 为 0 则永远着火.",
				"§4/particle <§oid§r§4> <§ox§r§4> <§oy§r§4> <§oz§r§4> <§oxv§r§4> <§oyv§r§4> <§ozv§r§4> <§od§r§4>",
				"§f生成粒子. v: 速度; d: 尺寸.",
				"§4/pretender [§oname§r§4]",
				"§f设置自己头上的名字. 若未指定 name 则隠藏自己的名字.",
				"§4/qsc <§ofalse§r§4 | §otrue§r§4>",
				"§f快速填箱, 点击容器以将手持" + ModPE.getI18nEx("entity.Item.name", true, true) + "填满该容器. 等价指令: /quicksetchest.",
				"§f/rd",
				"§f切换当准星指向红石线时显示该红石线的讯号强度. 等价指令: /redstonedustdata.",
				"§f/ride <§ofalse§r | §otrue§r>",
				"§f点击" + ModPE.getI18nEx("entity.Mob.name", true, true) + "骑行.",
				"§f/scenter <§ooreId§r> | 0",
				"§f矿物追踪, 点击方块显示附近 20³ 正方体以内最近的矿物坐标. 0: 关闭.",
				"§4/setblock <§ox§r§4> <§oy§r§4> <§oz§r§4> <§oid§r§4> [§odata§r§4]",
				"§f设置方块. 等价指令: /settile.",
				"§4/sign [§oline§r§4] <§osignText§r§4>",
				"§f设置准星指向的吿示牌内容. line 取値 0 ~ 3, 黙认为 0; signText 为字符串. PIE 编辑器亦可以实现吿示牌内容无数行. 例: /sign 3 Hello,\\x20world!\\nHow\\x20are\\x20you?, 吿示牌内容第 4 行设置为 Hello, world!, 第 5 行设置为 How are you?",
				"§f/sp [§oplayerId§r]",
				"§f对玩家进行旁观. 若未指定 playerId 则切换旁观者模式, 点击实体对该实体进行旁观. 等价指令: /cam, /camera, /spectator.",
				"§4/spawnpoint [<§ox§r§4> <§oy§r§4> <§oz§r§4>]",
				"§f设置重生点. 等价指令: /setworldspawn.",
				"§f/sprint <§ovelocitaxz§r> [§ovelocitay§r]",
				"§f疾跑. velocitaxz, velocitay: 加倍速度, 跳跃, 0 为关闭, 1 为加单倍, 2 为加双倍...",
				"§4/summon <§oid§r§4> [§ox§r§4] [§oy§r§4] [§oz§r§4] [§otimes§r§4]",
				"§f生成实体. times: 数量.",
				"§4/time add | query | set [§oticks§r§4] [§odoDaylightCycle§r§4]",
				"§f管理时间. ticks 取値 0 ~ " + Int.MAX_VALUE + "; doDaylightCycle 取値 false 或 true. 例: /time set noon 1, 锁定时间为中午.",
				"§f/tipPos <§oplayerId§r>",
				"§f切换永远显示玩家的坐标.",
				"§f/tiptile",
				"§f切换当准星指向方块时显示该方块的 ID 与名称.",
				"§f/tp <§oplayerId§r> | <§oname§r> | list | {<§ox§r> <§oy§r> <§oz§r>}",
				"§f传送. name: 记彔点名称, 若记彔点不存在则在自己的位置创建记彔点. 等价指令: /tele, /teleport, /tp2p.",
				"§f/version",
				"§f显示本 JS 版本号.",
				"§4/weather clear | lightning | rain | thunder [§olevel§r§4] [§odoWeatherCycle§r§4]",
				"§f设置天气. thunder: 雷雨. level 取値 0 ~ " + Int.MAX_VALUE + "; doWeatherCycle 取値 false 或 true.",
				"§f/xp <§oxp§r> | §4{<§oxpBottles§r§4> <§oplayerId§r§4>}§f | <§olevel§r>L",
				"§f给予玩家经验. xpBottles: 经验瓶的数量. 例: /xp 30L, 给自己 30 级经验. 等价指令: /experience.",
				"§4/xpld <§ofalse§r§4 | §otrue§r§4>",
				"§f允许爆炸. false: 防爆. 等价指令: /Explode."
			];
			if (DATA.length <= 1) DATA[1] = 1;
			if (isNaN(DATA[1])) {
				for (var l = 0; l < HELP.length; l++) if (HELP[l].substr(3, (HELP[l].indexOf(" ") == -1) ? HELP[l].length - 3 : HELP[l].indexOf(" ") - 3) == DATA[1].toLowerCase()) {
					clientMessage("§4Usage: " + HELP[l]);
					clientMessage(HELP[l + 1]);
					break;
				}
				if (l >= HELP.length) clientMessage("§cusefulCommands: " + ModPE.getI18n("commands.generic.notFound"));
			} else {
				clientMessage("§2--- 显示指令帮助手冊第 " + DATA[1] + " 页, 总 " + Math.ceil(HELP.length / 8) + " 页 (/help [§opage§r§2 | §ocommand§r§2]) ---");
				if (eval("\x44\x61\x74\x61\x5b\x31\x5d") == "\x31") {
					if (true) clientMessage("\xa7\x61\u652f\u6301\u6b63\u7248\x3a\x20\u611f\u8c22\u4f60\u4f7f\u7528\xa7o\u65b9\u5757\u542f\u52a8\u5668\xa7\x72\x2e"); else clientMessage("\xa7\x34\u652f\u6301\u6b63\u7248\x3a\x20\u8bf7\u4f7f\u7528\x20\x4d\x6f\x64\x50\x45\x20\u4f5c\u8005\x20\x5a\x68\x75\x6f\x77\x65\x69\x20\x5a\x68\x61\x6e\x67\x20\u7684\xa7o\u65b9\u5757\u542f\u52a8\u5668\u4e13\u4e1a\u7248\xa7\x72\u8fd0\u884c\u672c\x20\x4a\x53\x2e");
					clientMessage("\x57\x4c\x41\x4e\x20\u5c40\u57df\u7f51\u591a\u4eba\u6e38\u620f\u6307\u4ee4\x20\x42\x79\x20\xa7\x64\x4d\x49\x53\x54\x45\x52\x5f\x43\x48\x41\x4e\xa7\x66\x2e");
				}
				for (var l = 8 * (DATA[1] - 1); l < 8 * DATA[1] && HELP[l] != undefined; l++) clientMessage(HELP[l]);
			}*/
			break;
		case "hbr":
		case "herobrinesblazerod":
		case "collisionsize":
		case "hitbox":
		case "healthpoint":
		case "hp":
		case "idlist":
		case "il":
		case "im":
		case "inventory":
		case "ivty":
		case "keepinventory":
		case "ki":
		case "kick":
		case "kill":
		case "list":
		case "pl":
		case "playerlist":
		case "plist":
		case "who":
		case "level":
		case "lvl":
		case "m":
		case "nametag":
		case "nt":
		case "ndt":
		case "nodestroyingtile":
		case "novictim":
		case "nvtm":
		case "onfire":
		case "particle":
		case "pretender":
		case "qsc":
		case "quicksetchest":
		case "rd":
		case "redstonedustdata":
		case "ride":
		case "scenter":
		case "setblock":
		case "settile":
		case "sign":
		case "cam":
		case "camera":
		case "sp":
		case "spectator":
		case "setworldspawn":
		case "spawnpoint":
		case "sprint":
		case "summon":
		case "time":
		case "tipPos":
		case "tiptile":
		case "tele":
		case "teleport":
		case "tp":
		case "tp2p":
		case "version":
		case "weather":
		case "experience":
		case "xp":
		case "explode":
		case "xpld":
		case "\x65\x64\x69\x74\x6f\x72": break;
		default:
			clientMessage("§cusefulCommands: " + ModPE.getI18n("commands.generic.notFound"));
			break;
	}
}

quickBuilding.fill = function (xLower, yLower, zLower, xUpper, yUpper, zUpper, id, data, hollow, replaceATypeOfTiles, findId, findData) {
	for (var xt = xLower; xt <= xUpper; xt++) for (var yt = yLower; yt <= yUpper; yt++) for (var zt = zLower; zt <= zUpper; zt++) if ((!hollow || xt == xLower || xt == xUpper || yt == yLower || yt == yUpper || zt == zLower || zt == zUpper) && (!replaceATypeOfTiles || getTile(xt, yt, zt) == findId && Level.getData(xt, yt, zt) == findData)) setTile(xt, yt, zt, id, data);
}

quickBuilding.paste = function (xLower, yLower, zLower, xUpper, yUpper, zUpper, pasteAir) {
	for (var xt = xLower; xt <= xUpper; xt++) for (var yt = yLower; yt <= yUpper; yt++) for (var zt = zLower; zt <= zUpper; zt++) if (pasteAir || getTile(quickBuilding.cube.clipbrd.x + xt - xLower, quickBuilding.cube.clipbrd.y + yt - yLower, quickBuilding.cube.clipbrd.z + zt - quickBuilding.cube.zLower) > 0) setTile(xt, yt, zt, getTile(quickBuilding.cube.clipbrd.x + xt - xLower, quickBuilding.cube.clipbrd.y + yt - yLower, quickBuilding.cube.clipbrd.z + zt - zLower), Level.getData(quickBuilding.cube.clipbrd.x + xt - xLower, quickBuilding.cube.clipbrd.y + yt - yLower, quickBuilding.cube.clipbrd.z + zt - zLower));
}

quickBuilding.build = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(quickBuilding.fillRoad);
	checkbox.setText("使用手持方块铺路");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		quickBuilding.fillRoad = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(quickBuilding.linear.canPlace);
	checkbox.setText("快速放置");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		quickBuilding.linear.canPlace = checked;
	}}));
	layout.addView(checkbox);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(quickBuilding.linear.canDestroy);
	checkbox.setText("快速破坏");
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		quickBuilding.linear.canDestroy = checked;
	}}));
	layout.addView(checkbox);
	var btnDirection = new android.widget.Button(CTX);
	btnDirection.setText("方向: " + quickBuilding.linear.direction);
	btnDirection.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		var d = "";
		if (view.getText().slice(-1) == "-") d = view.getText().slice(-2, -1) + "+"; else {
			switch (String(view.getText().slice(-2, -1))) {
				case "x": d = "y"; break;
				case "y": d = "z"; break;
				default: d = "x"; break;
			}
			d += "-";
		}
		view.setText("方向: " + d);
	}}));
	layout.addView(btnDirection);
	var text = new android.widget.TextView(CTX);
	text.setText("长度");
	layout.addView(text);
	var lytLength = new android.widget.LinearLayout(CTX);
	layout.addView(lytLength);
	var edtLength = new android.widget.EditText(CTX);
	edtLength.setText(String(quickBuilding.linear.length));
	edtLength.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytLength.addView(edtLength);
	var text = new android.widget.TextView(CTX);
	text.setText("m");
	lytLength.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("步长");
	layout.addView(text);
	var lytStep = new android.widget.LinearLayout(CTX);
	layout.addView(lytStep);
	var edtStep = new android.widget.EditText(CTX);
	edtStep.setText(String(quickBuilding.linear.step));
	edtStep.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytStep.addView(edtStep);
	var text = new android.widget.TextView(CTX);
	text.setText("m");
	lytStep.addView(text);
	var chkLratt = new android.widget.CheckBox(CTX);
	chkLratt.setChecked(quickBuilding.linear.ratt);
	chkLratt.setText("仅替换");
	chkLratt.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		edtLFid.setEnabled(checked);
		edtLFata.setEnabled(checked);
	}}));
	layout.addView(chkLratt);
	var lytLFid = new android.widget.LinearLayout(CTX);
	layout.addView(lytLFid);
	var edtLFid = new android.widget.EditText(CTX);
	edtLFid.setEnabled(chkLratt.isChecked());
	edtLFid.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtLFid.setText(String(quickBuilding.linear.fid));
	lytLFid.addView(edtLFid);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	lytLFid.addView(text);
	var edtLFata = new android.widget.EditText(CTX);
	edtLFata.setEnabled(chkLratt.isChecked());
	edtLFata.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtLFata.setText(String(quickBuilding.linear.fata));
	lytLFid.addView(edtLFata);
	var text = new android.widget.TextView(CTX);
	text.setText("方块 ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText(), true);
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtLFid.setText(view.getText().split("\n")[0].split(":")[0]);
				edtLFata.setText(view.getText().split("\n")[0].split(":")[1]);
				edtCFid.setText(view.getText().split("\n")[0].split(":")[0]);
				edtCFata.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[0]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		quickBuilding.linear.direction = btnDirection.getText().slice(-2),
			quickBuilding.linear.length = edtLength.getText(),
			quickBuilding.linear.step = edtStep.getText(),
			quickBuilding.linear.ratt = chkLratt.isChecked(),
			quickBuilding.linear.fid = edtLFid.getText(),
			quickBuilding.linear.fata = edtLFata.getText();
	}}));
	layout.addView(button);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setChecked(quickBuilding.cube.canSetPort);
	checkbox.setText("点击长方体中的一对对顶角以选定方块");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		quickBuilding.cube.canSetPort = checked;
	}}));
	layout.addView(checkbox);
	var button = new android.widget.Button(CTX);
	button.setText("复制");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (quickBuilding.cube.upper.x != NaN) quickBuilding.cube.clipbrd = new Point(quickBuilding.cube.lower.x, quickBuilding.cube.lower.y, quickBuilding.cube.lower.z);
	}}));
	layout.addView(button);
	var chkPasteAir = new android.widget.CheckBox(CTX);
	chkPasteAir.setText("粘贴空气");
	chkPasteAir.setChecked(true);
	layout.addView(chkPasteAir);
	var button = new android.widget.Button(CTX);
	button.setText("粘贴");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (quickBuilding.cube.clipbrd.x != NaN && quickBuilding.cube.lower.x != NaN) quickBuilding.paste(quickBuilding.cube.lower.x, quickBuilding.cube.lower.y, quickBuilding.cube.lower.z, quickBuilding.cube.upper.x, quickBuilding.cube.upper.y, quickBuilding.cube.upper.z, chkPasteAir.isChecked());
	}}));
	layout.addView(button);
	var tglSolid = new android.widget.ToggleButton(CTX);
	tglSolid.setTextOff("空心");
	tglSolid.setTextOn("实心");
	tglSolid.setChecked(true);
	layout.addView(tglSolid);
	var chkCratt = new android.widget.CheckBox(CTX);
	chkCratt.setText("仅替换");
	chkCratt.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		edtCFid.setEnabled(checked);
		edtCFata.setEnabled(checked);
	}}));
	layout.addView(chkCratt);
	var lytCFid = new android.widget.LinearLayout(CTX);
	layout.addView(lytCFid);
	var edtCFid = new android.widget.EditText(CTX);
	edtCFid.setEnabled(false);
	edtCFid.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtCFid.setText("0");
	lytCFid.addView(edtCFid);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	lytCFid.addView(text);
	var edtCFata = new android.widget.EditText(CTX);
	edtCFata.setEnabled(false);
	edtCFata.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtCFata.setText("0");
	lytCFid.addView(edtCFata);
	var button = new android.widget.Button(CTX);
	button.setText("使用手持方块填充");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (quickBuilding.cube.upper != {x: NaN, y: NaN, z: NaN}) quickBuilding.fill(quickBuilding.cube.lower.x, quickBuilding.cube.lower.y, quickBuilding.cube.lower.z, quickBuilding.cube.upper.x, quickBuilding.cube.upper.y, quickBuilding.cube.upper.z, getCarriedItem(), Player.getCarriedItemData(), !tglSolid.isChecked(), chkCratt.isChecked(), edtCFid.getText(), edtCFata.getText());
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

rotatroller.load = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var button = new android.widget.Button(CTX);
	button.setBackgroundColor(android.graphics.Color.argb(0, 255, 255, 255));
	var p = {x: Wnd.WIDTH * 2.5, y: Wnd.HEIGHT * 2.5}, down = {x: 0, y: 0};
	button.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (view, event) {
		switch (event.getAction()) {
			case event.ACTION_DOWN:
				down = {x: event.getX(), y: event.getY()};
				break;
			case event.ACTION_MOVE:
				var moved = {x: (event.getX() - down.x) / 2, y: (event.getY() - down.y) / 2};
				rotatroller.window.update(parseInt(p.x += moved.x), parseInt(p.y += moved.y), 1, 1);
				setRot(getPlayerEnt(), getYaw() + moved.x * rotatroller.sensitivity * (rotatroller.invertYaxis * -2 + 1), getPitch() + moved.y * rotatroller.sensitivity * (rotatroller.invertYaxis * -2 + 1));
				break;
			case event.ACTION_UP:
				p = {x: Wnd.WIDTH * 2.5, y: Wnd.HEIGHT * 2.5};
				rotatroller.window.update(p.x, p.y, Wnd.WIDTH, Wnd.HEIGHT);
				break;
		}
		return false;
	}}));
	button.setText("|||\n|||");
	button.setTextSize(button.getTextSize());
	layout.addView(button);
	rotatroller.window = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT);
	rotatroller.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
}

Scenter.add = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("方块 ID");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytId = new android.widget.LinearLayout(CTX);
	layout.addView(lytId);
	var edtId = new android.widget.EditText(CTX);
	edtId.setText("56");
	edtId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtId);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	lytId.addView(text);
	var edtData = new android.widget.EditText(CTX);
	edtData.setHint("选填");
	edtData.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtData.setText("");
	lytId.addView(edtData);
	var text = new android.widget.TextView(CTX);
	text.setText("方块 ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText(), true);
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtId.setText(view.getText().split("\n")[0].split(":")[0]);
				if (view.getText().split("\n")[0].split(":")[1] != 0) edtData.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[0]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (("," + Scenter.hotOres.join() + ",").indexOf("," + edtId.getText() + ":" + edtData.getText() + ",") == -1) Scenter.hotOres.push(edtId.getText() + ":" + edtData.getText());
		window.dismiss();
		wndScenter.dismiss();
		Scenter.options();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	var window = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * 2, 0);
}

Scenter.options = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setText("矿物追踪");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setChecked(Scenter.scenter);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		Scenter.scenter = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("搜寻范围");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("內切球半径");
	layout.addView(text);
	var lytRadius = new android.widget.LinearLayout(CTX);
	layout.addView(lytRadius);
	var edtRadius = new android.widget.EditText(CTX);
	edtRadius.setText(String(Scenter.inradius));
	edtRadius.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtRadius.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		Scenter.inradius = Number(s);
	}}));
	lytRadius.addView(edtRadius);
	var text = new android.widget.TextView(CTX);
	text.setText("m");
	lytRadius.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("矿物");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("长按以刪除");
	layout.addView(text);
	var scroll = new android.widget.ScrollView(CTX);
	layout.addView(scroll);
	var lytHotOres = new android.widget.LinearLayout(CTX);
	lytHotOres.setOrientation(lytHotOres.VERTICAL);
	scroll.addView(lytHotOres);
	var radio = new android.widget.RadioButton(CTX);
	radio.setText("+\n");
	radio.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			radio.setChecked(false);
			Scenter.add();
		}
	}}));
	lytHotOres.addView(radio);
	var rdoCarriedItem = new android.widget.RadioButton(CTX);
	rdoCarriedItem.setChecked(Scenter.ore == "c:");
	rdoCarriedItem.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		if (checked) {
			for (var o in rdoHotOres) rdoHotOres[o].setChecked(false);
			Scenter.ore = "c:";
		}
	}}));
	rdoCarriedItem.setText("手持物品\n");
	lytHotOres.addView(rdoCarriedItem);
	var rdoHotOres = []
	for (var o in Scenter.hotOres) {		
		rdoHotOres[o] = new android.widget.RadioButton(CTX);
		rdoHotOres[o].setChecked(Scenter.ore == Scenter.hotOres[o]);
		rdoHotOres[o].setText(Scenter.hotOres[o] + "\n" +
			Item.getName(Scenter.hotOres[o].split(":")[0], Scenter.hotOres[o].split(":")[1]));
		rdoHotOres[o].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
			if (checked) {
				rdoCarriedItem.setChecked(false);
				for (var o in rdoHotOres) if (rdoHotOres[o] != view) rdoHotOres[o].setChecked(false);
				Scenter.ore = view.getText().split("\n")[0];
			}
		}}));
		rdoHotOres[o].setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			for (var o in rdoHotOres) if (rdoHotOres[o] == view) {
				Scenter.hotOres.splice(o, 1);
				break;
			}
			wndScenter.dismiss();
			Scenter.options();
			return true;
		}}));
		lytHotOres.addView(rdoHotOres[o]);
	}
	wndScenter = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndScenter.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndScenter.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

Scenter.saveNearestOre = function () {
	Scenter.isSearching = true;
	new java.lang.Thread(new java.lang.Runnable({run: function () {
		var id = "", data = "", ores = [], p = {}, x = 0, y = 0, z = 0, xl = 0, yl = 0, zl = 0, xu = 0, yu = 0, zu = 0;
		for (; Scenter.scenter; ) {
			id = Scenter.ore.split(":")[0], data = Scenter.ore.split(":")[1], ores = [], p = new Point(),
				px = getPlayerX(), py = getPlayerY(), pz = getPlayerZ(),
				xl = Math.floor(px) - Scenter.inradius, yl = Math.floor(py) - Scenter.inradius, zl = Math.floor(pz) - Scenter.inradius,
				xu = Math.floor(px) + Scenter.inradius, yu = Math.floor(py) + Scenter.inradius, zu = Math.floor(pz) + Scenter.inradius;
			if (id == "c") id = getCarriedItem();
			for (var x = xl; x < xu; x++) for (var y = yl; y < yu; y++) for (var z = zl; z < zu; z++) if (getTile(x, y, z) == id && (Level.getData(x, y, z) == data || data == undefined)) ores.push(new Point(x, y, z));
			for (var o in ores) if (Math.distance(ores[o].x, ores[o].y, ores[o].z, px, py, pz) < Math.distance(p.x, p.y, p.z, px, py, pz) || o == 0) p = new Point(ores[o].x, ores[o].y, ores[o].z);
			Scenter.nearestOre = new Point(p.x, p.y, p.z);
		}
		Scenter.isSearching = false;
	}})).start();
}

Scenter.showNearestOre = function () {
	var id = Scenter.ore.split(":")[0], data = Scenter.ore.split(":")[1], x = getPlayerX(), y = getPlayerY(), z = getPlayerZ();
	if (id == "c") id = getCarriedItem();
	if (!isNaN(Scenter.nearestOre.x) && !isNaN(Scenter.nearestOre.y) && !isNaN(Scenter.nearestOre.z) && getTile(Scenter.nearestOre.x, Scenter.nearestOre.y, Scenter.nearestOre.z) == id && (Level.getData(Scenter.nearestOre.x, Scenter.nearestOre.y, Scenter.nearestOre.z) == data || data == undefined)) {
		Scenter.distance = Math.distance(x, y, z, Scenter.nearestOre.x + 0.5, Scenter.nearestOre.y + 0.5, Scenter.nearestOre.z + 0.5);
		for (var p = 0; p <= Scenter.distance * 8; p++) Level.addParticle(ParticleType.crit, (Scenter.nearestOre.x + 0.5 - x) / Scenter.distance / 8 * p + x, (Scenter.nearestOre.y + 0.5 - y) / Scenter.distance / 8 * p + y, (Scenter.nearestOre.z + 0.5 - z) / Scenter.distance / 8 * p + z, 0, 0, 0, 1);
	} else Scenter.distance = NaN;
	Scenter.showTime = 60;	
}

function screenChangeHook(screenName) {
	CTX.runOnUiThread(new java.lang.Runnable({run: function () {
		switch (screenName) {
			case "chat_screen":
				chat.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
				break;
			case "death_screen":
				if (respawn.respawn) respawn.window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
				break;
			case "start_screen":
				if (TMI && doLangEdit) langEdit();
				break;
			case "world_loading_progress_screen - joining_multiplayer_external_server":
			case "world_loading_progress_screen - local_world_load":
				ModPE.wndLeaveGame.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
				break;
			default:
				try {
					chat.window.dismiss();
					if (respawn.respawn) respawn.window.dismiss();
					ModPE.wndLeaveGame.dismiss();
				}
				catch (err) {
				}
				break;
		}
	}}));
}

function showMnuTxt(alpha) {
	CTX.runOnUiThread(new java.lang.Runnable({run: function () {
		var layout = new android.widget.LinearLayout(CTX);
		layout.setOrientation(layout.VERTICAL);
		txtMnu = new android.widget.TextView(CTX);
		if (!alpha) txtMnu.setBackgroundColor(android.graphics.Color.argb(127, 255, 255, 255));
		txtMnu.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
			if (TMI && ModPE.lockMextToTrot) {
				const NAME = "-usefulCommands.js-screenshot";
				ModPE.takeScreenshot(new Date().getSeconds() + NAME);
				print("\n" +
					"截图保存在\n" +
					"[内存卡目彔: " + new android.os.Environment.getExternalStorageDirectory() + "] /Pictures/MCPEToolbox/时间" + NAME + ".png");
			} else if (!pe && isInGame && lan == null) if (TMI) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
				var alert = new android.app.AlertDialog.Builder(CTX);
				alert.setTitle(ModPE.getI18n("menu.multiplayer"));
				alert.setMessage(ModPE.getI18n("menu.multiplayer") + ".");
				alert.setPositiveButton(ModPE.getI18n("networkWorld.lan_label") + "\n例如: WLAN 联机", new android.content.DialogInterface.OnClickListener({onClick: function (dialog, w) {
					lan = true;
					antiduowan();
				}}));
				alert.setNegativeButton(ModPE.getI18n("networkWorld.servers_label") + "\n例如: PocketMine (PM)", new android.content.DialogInterface.OnClickListener({onClick: function (dialog, w) {
					lan = false;
					antiduowan();
				}}));
				alert.show();
			}})); else {
				lan = true;
				antiduowan();
			} else antiduowan();
		}}));
		/*txtMnu.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function () {
			if (isMoving) return true;
			return true;
		}}));*/
		var down = {x: 0, y: 0}, /*isMoving = false,*/ p = {x: 0, y: Wnd.HEIGHT};
		txtMnu.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (view, event) {
			if (!locked) switch(event.getAction()) {
				case event.ACTION_DOWN:
					down = {x: event.getX(), y: event.getY()};
					break;
				case event.ACTION_MOVE:
					// isMoving = true;
					wndMnuTxt.update(parseInt(p.x += (event.getX() - down.x) / 2), parseInt(p.y += (event.getY() - down.y) / 2), -1, -1);
					break;
				/*case event.ACTION_UP:
					isMoving = false;
					break;*/
			}
			return false;
		}}));
		txtMnu.setText(alpha ? "" : "\x4d\x49\x53\x54\x45\x52\x5f\x20\n\x43\x48\x41\x4e");
		layout.addView(txtMnu);
		wndMnuTxt = new android.widget.PopupWindow(layout, Wnd.WIDTH / 2, Wnd.HEIGHT / 2);
		wndMnuTxt.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, Wnd.HEIGHT);
	}}));
}

function showUsefulCommands() {
	var alert = new android.app.AlertDialog.Builder(CTX);
	alert.setTitle("主要功能");
	alert.setMessage("usefulCommands 是一个面向多人游戏的插件.\n" +
		"以下主要功能将对你游玩有很大辅助.\n\n" +
		ModPE.getI18n("options.fov") + ":\n可当成高倍望远境, 看淸远方的方块, " + ModPE.getI18n("entity.Mob.name") + ", " + ModPE.getI18n("item.sign.name") + " 内容等.\n\n" +
		"经验:\n拥有比别人多的" + ModPE.getI18nEx("container.enchant", true, true) + "机会.\n\n" +
		"飞行:\n快速到达世界每个角落, 比别人认识更多的世界.\n\n" +
		"虛拟飞行器:\n可在大多数服务器中飞行而不被踢出.\n\n" +
		"点击方块传送:\n到达你见到的地方, 可实现飞檐走壁, 爬上无尽高的大楼等.\n\n" +
		"疾跑:\n可加倍速跑, 别人永远追不上你.\n\n" +
		"轻功" + ModPE.getI18nEx("tile.flowing_lava.name", true, true) + "漂:\n可直接在" + ModPE.getI18nEx("tile.flowing_lava.name", true, true) + "上走而不会被烧伤.\n\n" +
		"穿墙:\n可穿过别人过不去的墙, 闯入民宅等.\n\n" +
		"自动瞄准 (近战):\n使你攻击时不用转动视角, 狂劈必死.\n\n" +
		"防跳悬崖:\n可防止别人击退你导致跳悬崖或虛空, 搭桥更安全.\n\n" +
		"死亡防喷 (死亡不掉):\n(仅限主机与 LAN 联机)\n你的死亡不再是最可怕的事.\n\n" +
		"游戏模式:\n你就是上帝.\n\n" +
		"禁用所有" + ModPE.getI18nEx("entity.Item.name", true) + ":\n可防止 PVP 时错点到" + ModPE.getI18nEx("tile.crafting_table.name", true) + ", 容器等而被别人趁机杀死.\n\n" +
		ModPE.getI18n("container.inventory") + ":\n(仅限主机与 LAN 联机)\n可使你拥有任何" + ModPE.getI18nEx("entity.Item.name", true) + ".\n\n" +
		"玩家传送:\n快速到达玩家位置, 联机必备.\n\n" +
		"显示坐标:\n破解玩家位置, 常用于 PVP.\n\n" +
		ModPE.getI18n("container.enchant") + ":\n(仅限主机与 LAN 联机)\n使自己的装备与工具比别人强.\n\n" +
		"效果:\n可比别人拥有特效.\n\n" +
		"生成蛋:\n(仅限主机与 LAN 联机)\n随意召唤实体.\n\n" +
		"快速计算器, 浏览器:\n快速计算" + ModPE.getI18nEx("entity.Item.name", true, true) + "数量, 坐标, 快速査找资料, 不再去翻计算器与浏览器.\n\n" +
		"尚有大量主机专用功能, 如果你经常单人游玩, 主机功能亦会对你有很大辅助.");
	alert.show();
}

st.st = function (x, y, z) {
	CTX.runOnUiThread(new java.lang.Runnable({run: function () {
		var layout = new android.widget.LinearLayout(CTX);
		layout.setOrientation(layout.VERTICAL);
		if (pe) {
			var button = new android.widget.Button(CTX);
			button.setText("OK");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				for (var l = 0; l <= 3; l++) Level.setSignText(x, y, z, l, edtSignText[l].getText());
			}}));
			layout.addView(button);
		}
		var lytSignText = new android.widget.LinearLayout(CTX);
		lytSignText.setOrientation(lytSignText.VERTICAL);
		var scroll = new android.widget.ScrollView(CTX);
		scroll.addView(lytSignText);
		layout.addView(scroll);
		var edtSignText = [];
		for (var l = 0; l <= 3; l++) {
			edtSignText[l] = new android.widget.EditText(CTX);
			edtSignText[l].setFocusable(pe);
			edtSignText[l].setGravity(android.view.Gravity.CENTER);
			if (pe) edtSignText[l].setText(Level.getSignText(x, y, z, l)); else edtSignText[l].setText(android.text.Html.fromHtml(Level.getSignText(x, y, z, l).toHtml()));
			lytSignText.addView(edtSignText[l]);
		}
		if (pe) {
			var button = new android.widget.Button(CTX);
			button.setText("+");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtSignText[3].setText(edtSignText[3].getText() + "\n");
			}}));
			lytSignText.addView(button);
			var button = new android.widget.Button(CTX);
			button.setText("×");
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				for (var l = 3; l >= 0; l--) {
					if (edtSignText[l].getText().toString().indexOf("\n") > -1) {
						edtSignText[l].setText(edtSignText[l].getText().toString().slice(0, edtSignText[l].getText().toString().lastIndexOf("\n")));
						break;
					} else if (edtSignText[l].getText() != "") {
						edtSignText[l].setText("");
						break;
					}
				}
			}}));
			lytSignText.addView(button);
		}
		var window = new android.widget.PopupWindow(layout, Wnd.WIDTH * 3, Wnd.HEIGHT * 3, true);
		window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
		window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * 2 - window.getWidth() / 2, Wnd.HEIGHT * 2 - window.getHeight() / 2);
	}}));
}

String.prototype.string = function (length) {
	return new Array(length + 1).join(this);
}

String.prototype.toHtml = function () {
	return this
		.replace(/§0/g, "</font></b></s></u></i><font color='#000000'>")
		.replace(/§1/g, "</font></b></s></u></i><font color='#0000aa'>")
		.replace(/§2/g, "</font></b></s></u></i><font color='#00aa00'>")
		.replace(/§3/g, "</font></b></s></u></i><font color='#00aaaa'>")
		.replace(/§4/g, "</font></b></s></u></i><font color='#aa0000'>")
		.replace(/§5/g, "</font></b></s></u></i><font color='#aa00aa'>")
		.replace(/§6/g, "</font></b></s></u></i><font color='#ffaa00'>")
		.replace(/§7/g, "</font></b></s></u></i><font color='#aaaaaa'>")
		.replace(/§8/g, "</font></b></s></u></i><font color='#555555'>")
		.replace(/§9/g, "</font></b></s></u></i><font color='#5555ff'>")
		.replace(/§a/g, "</font></b></s></u></i><font color='#55ff55'>")
		.replace(/§b/g, "</font></b></s></u></i><font color='#55ffff'>")
		.replace(/§c/g, "</font></b></s></u></i><font color='#ff5555'>")
		.replace(/§d/g, "</font></b></s></u></i><font color='#ff55ff'>")
		.replace(/§e/g, "</font></b></s></u></i><font color='#ffff55'>")
		.replace(/§f/g, "</font></b></s></u></i><font color='#ffffff'>")
		.replace(/§l/g, "<b>")
		.replace(/§m/g, "<s>")
		.replace(/§n/g, "<u>")
		.replace(/§o/g, "<i>")
		.replace(/§r/g, "</font></b></s></u></i>")
		.replace(/\n/g, "<br />");
}

String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
}

Target.getNearestEntity = function () {
	const E = (Player.list().join() + "," + Entity.getAll().join()).split(",");
	var d = 0, shortestDistance = Number.MAX_VALUE, nearestEntity = -1;
	for (var e in E) {
		E[e] = Number(E[e]);
		d = Math.distance(getPlayerX(), getPlayerY(), getPlayerZ(), Entity.getX(E[e]), Entity.getY(E[e]), Entity.getZ(E[e]));
		if (d < shortestDistance && new RegExp(Target.regExp, "i".string(Target.i)).test(Entity.getNameTag(E[e])) && E[e] != getPlayerEnt() && Entity.getEntityTypeId(E[e]) != -1) {
			nearestEntity = E[e];
			shortestDistance = d;
		}
	}
	return nearestEntity;
}

Target.getRot = function () {
	const TX = Entity.getX(Target.ent) - getPlayerX(),
		TY = Entity.getY(Target.ent) - getPlayerY(),
		TZ = Entity.getZ(Target.ent) - getPlayerZ();
	var yaw = 0, pitch = 0;
	switch (0) {
		case TX | TZ: break;
		case TX: yaw = (TZ / Math.abs(TZ) - 1) * -90; break;
		case TZ: yaw = TX / Math.abs(TX) * -90; break;
		default: yaw = ((TZ / Math.abs(TZ) - 1) * -90 + TZ / Math.abs(TZ) * Math.abs(Math.atan(TX / TZ) * 180 / Math.PI)) * -(TX / Math.abs(TX)); break;
	}
	if (TX | TZ != 0) pitch = -Math.atan(TY / Math.sqrt(Math.pow(TX, 2) + Math.pow(TZ, 2))) * 180 / Math.PI;
	return {pitch: pitch, yaw: yaw};
}

Target.loadSwitcher = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	Target.text = new android.widget.TextView(CTX);
	Target.text.setGravity(android.view.Gravity.CENTER);
	Target.text.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (!/^(-1|0)$/.test(Target.ent)) Target.setTarget(-1); else {
			var ent = Target.getNearestEntity();
			var nameTag = "";
			if (ent != -1) {
				Target.setTarget(ent);
				nameTag = Entity.getNameTag(ent);
				if (nameTag == "") nameTag = Entity.getName(Entity.getEntityTypeId(ent));
			} else nameTag = "无匹配的实体";
			android.widget.Toast.makeText(CTX, android.text.Html.fromHtml(String(nameTag).toHtml()), 0).show();
		}
	}}));
	Target.text.setText("瞄准\n");
	Target.text.setTextSize(Target.text.getTextSize());
	layout.addView(Target.text);
	Target.window = new android.widget.PopupWindow(layout, Wnd.WIDTH / 2, Wnd.HEIGHT / 2);
	Target.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
}

Target.setTarget = function (entity) {
	Target.ent = entity;
	CTX.runOnUiThread(new java.lang.Runnable({run: function () {
		try {
			Target.text.setTextColor(android.graphics.Color.argb(255, entity == -1 ? 0 : 255, entity == -1 ? 255 : 0, 0));
		}
		catch (err) {
		}
	}}));
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
	if (useItemToTp != 0) {
		var sx = 0, sy = 0, sz = 0;
		switch (useItemToTp) {
			case 1:
				switch (side) {
					case BlockFace.EAST: case BlockFace.WEST: sx += side * 2 - 9; break;
					case BlockFace.DOWN: case BlockFace.UP: sy += side * 3 - 1; break;
					case BlockFace.NORTH: case BlockFace.SOUTH: sz += side * 2 - 5; break;
				}
				setPosition(getPlayerEnt(), x + sx + 0.5, y + sy + 0.5, z + sz + 0.5);
				break;
			case 2:
				switch (side) {
					case BlockFace.EAST: case BlockFace.WEST: sx += side * -2 + 9; break;
					case BlockFace.DOWN: case BlockFace.UP: sy += side * -3 + 2; break;
					case BlockFace.NORTH: case BlockFace.SOUTH: sz += side * -2 + 5; break;
				}
				setPosition(getPlayerEnt(), x + sx + 0.5, y + sy + 0.5, z + sz + 0.5);
				noclip = new Point(sx, sy, sz);
				break;
		}
		preventDefault();
	}
	if (pickTile) {
		for (var s = 0; s < 9; s++) if (Player.getInventorySlot(s) == blockId && Player.getInventorySlotData(s) == blockDamage)	{
			Player.setSelectedSlotId(s);
			break;
		}
		if (s >= 9) addItemInventory(blockId, 1, blockDamage);
		preventDefault();
	}
	if (pe && signTextNa && /^(63|68|323)$/.test(itemId) && side != BlockFace.DOWN) {
		var sx = x, sy = y, sz = z;
		switch (side) {
			case BlockFace.EAST: case BlockFace.WEST: sx += (side - 4) * 2 - 1; break;
			case BlockFace.UP: sy++; break;
			case BlockFace.NORTH: case BlockFace.SOUTH: sz += (side - 2) * 2 - 1; break;
		}
		if (getTile(sx, sy, sz) <= 0) {
			if (side == BlockFace.UP) setTile(sx, sy, sz, 63); else setTile(sx, sy, sz, 68, side);
			preventDefault();
		}
	} else if (st.editable && !Entity.isSneaking(getPlayerEnt()) && /^(63|68)$/.test(blockId)) {
		st.st(x, y, z);
		preventDefault();
	}
	if (pe && false) {
		const CN = Player.getItemCustomName(Player.getSelectedSlotId());
		if (paint.grass && itemId > 0) {
			if (itemId == 351) Level.setGrassColor(x, z, DYE_COLOR[itemDamage]); else if (CN != "" && CN != null) {
				if (!isNaN(CN)) {
					if (CN >= Int.MIN_VALUE && CN <= Int.MAX_VALUE) Level.setGrassColor(x, z, CN);
				} else if (CN.toLowerCase() == "picker") Player.setItemCustomName(Player.getSelectedSlotId(), Level.getGrassColor(x, z));
			}
			if (!TMI) {
				var t = getTile(x, 0, z), d = Level.getData(x, 0, z);
				setTile(x, 0, z, 255 - t);
				setTile(x, 0, z, t, d);
			}
			preventDefault();
		}
		if (itemId == 351) {
			if (paint.wool && blockId == 35) setTile(x, y, z, 35, 15 - itemDamage);
			if (paint.clay && blockId == 159) setTile(x, y, z, 159, 15 - itemDamage);
		}
		if (qsc) if (!Entity.isSneaking(getPlayerEnt())) switch (blockId) {
			case 54:
			case 146:
				var count = 54;
				for (var s = 2; s <= 5; s++) {
					var sx = x, sz = z;
					switch (s) {
						case BlockFace.EAST: case BlockFace.WEST: sx += (s - 4) * 2 - 1; break;
						case BlockFace.NORTH: case BlockFace.SOUTH: sz += (s - 2) * 2 - 1; break;
					}
					if (/^(54|146)$/.test(getTile(sx, y, sz)) && Level.getData(sx, y, sz) == Level.getData(x, y, z)) break;
				}
				if (s > 5) count /= 2;
				for (var slot = 0; slot < count; slot++) {
					Level.setChestSlot(x, y, z, slot, itemId, itemDamage, 255);
					if (CN != null && CN != "") Level.setChestSlotCustomName(x, y, z, slot, CN);
				}
				break;
			case 61:
			case 62:
				for (var slot = 0; slot < 2; slot++) {
					Level.setFurnaceSlot(x, y, z, slot, itemId, itemDamage, 255);
					if (CN != null && CN != "") Level.setFurnaceSlotCustomName(x, y, z, slot, CN);
				}
				break;
		}
		if (Explode.explode) explode(x, y, z, Explode.radius, Explode.burnt);
		if (quickBuilding.linear.canPlace) {
			var t = eval(quickBuilding.linear.direction.charAt(0));
			const END = eval("t " + quickBuilding.linear.direction.slice(-1) + " " + quickBuilding.linear.length);
			for (t; quickBuilding.linear.direction.slice(-1) == "-" ? t > END : t < END; eval("t " + quickBuilding.linear.direction.slice(-1) + "= " + quickBuilding.linear.step)) {
				var xt = quickBuilding.linear.direction.charAt(0) == "x" ? t : x, yt = quickBuilding.linear.direction.charAt(0) == "y" ? t : y, zt = quickBuilding.linear.direction.charAt(0) == "z" ? t : z;
				if (!quickBuilding.linear.ratt || getTile(xt, yt, zt) == quickBuilding.linear.fid && Level.getData(xt, yt, zt) == quickBuilding.linear.fata) setTile(xt, yt, zt, getCarriedItem(), Player.getCarriedItemData());
			}
			preventDefault();
		}
		if (quickBuilding.cube.canSetPort) {
			if (!quickBuilding.cube.name) {
				quickBuilding.cube.lower = new Point(Math.floor(x), Math.floor(y), Math.floor(z));
				quickBuilding.cube.upper = new Point();
			} else {
				const P = ["x", "y", "z"];
				for (var p in P) if (Math.floor(eval(P[p])) >= quickBuilding.cube.lower[P[p]]) quickBuilding.cube.upper[P[p]] = Math.floor(eval(P[p])); else {
					quickBuilding.cube.upper[P[p]] = quickBuilding.cube.lower[P[p]], quickBuilding.cube.lower[P[p]] = Math.floor(eval(P[p]));
				}
			}
			print("\n已设置点 " + (!quickBuilding.cube.name ? "A" : "B") + "(" + Math.floor(x) + ", " + Math.floor(y) + ", " + Math.floor(z) + ")");
			quickBuilding.cube.name = !quickBuilding.cube.name;
			preventDefault();
		}
		if (!pui) if (("," + bi.items.join() + ",").search("," + itemId + ":(" + itemDamage + "|),") > -1) preventDefault();
	}
	if (pui) if (itemId >= 256) preventDefault();
	if (Scenter.scenter) Scenter.showNearestOre();
}

veinMiner.add = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var text = new android.widget.TextView(CTX);
	text.setText("方块 ID");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytId = new android.widget.LinearLayout(CTX);
	layout.addView(lytId);
	var edtId = new android.widget.EditText(CTX);
	edtId.setText("56");
	edtId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtId);
	var text = new android.widget.TextView(CTX);
	text.setText(":");
	lytId.addView(text);
	var edtDamage = new android.widget.EditText(CTX);
	edtDamage.setHint("选填");
	edtDamage.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	lytId.addView(edtDamage);
	var text = new android.widget.TextView(CTX);
	text.setText("方块 ID 査询");
	layout.addView(text);
	var edtKeyword = new android.widget.EditText(CTX);
	edtKeyword.setHint("关键词");
	edtKeyword.setLayoutParams(TEXT_PARAMS);
	layout.addView(edtKeyword);
	var btnSearch = new android.widget.Button(CTX);
	btnSearch.setText("搜寻");
	btnSearch.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const RESULTS = Item.searchItem(edtKeyword.getText(), true);
		txtResult.setText("共 " + RESULTS.length + " 个结果");
		lytSearch.removeView(lytResults[lytResults.length - 1]);
		lytResults.push();
		lytResults[lytResults.length - 1] = new android.widget.LinearLayout(CTX);
		lytResults[lytResults.length - 1].setOrientation(lytResults[lytResults.length - 1].VERTICAL);
		lytSearch.addView(lytResults[lytResults.length - 1]);
		for (var r in RESULTS) {
			var button = new android.widget.Button(CTX);
			button.setText(RESULTS[r] + "\n" +
				Item.getName(RESULTS[r].split(":")[0], RESULTS[r].split(":")[1]));
			button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
				edtId.setText(view.getText().split("\n")[0].split(":")[0]);
				edtDamage.setText(view.getText().split("\n")[0].split(":")[1]);
			}}));
			lytResults[lytResults.length - 1].addView(button);
		}
	}}));
	layout.addView(btnSearch);
	var lytSearch = new android.widget.LinearLayout(CTX);
	lytSearch.setOrientation(lytSearch.VERTICAL);
	layout.addView(lytSearch);
	var lytResults = [];
	lytResults[0] = new android.widget.LinearLayout(CTX);
	lytSearch.addView(lytResults[lytResults.length - 1]);
	var txtResult = new android.widget.TextView(CTX);
	lytSearch.addView(txtResult);
	var button = new android.widget.Button(CTX);
	button.setText("OK");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		const ID = edtId.getText() + ":" + edtDamage.getText();
		if (("," + veinMiner.ores.join() + ",").indexOf("," + ID + ",") == -1) veinMiner.ores.push(ID);
		wndAddOres.dismiss();
		wndVm.dismiss();
		veinMiner.menu();
	}}));
	layout.addView(button);
	var scroll = new android.widget.ScrollView(CTX);
	scroll.addView(layout);
	wndAddOres = new android.widget.PopupWindow(scroll, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndAddOres.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndAddOres.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH * 2, 0);
}

veinMiner.menu = function () {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var checkbox = new android.widget.CheckBox(CTX);
	checkbox.setText("连锁挖矿");
	checkbox.setTextSize(checkbox.getTextSize());
	checkbox.setChecked(veinMiner.veinMiner);
	checkbox.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({onCheckedChanged: function (view, checked) {
		veinMiner.veinMiner = checked;
	}}));
	layout.addView(checkbox);
	var text = new android.widget.TextView(CTX);
	text.setText("最长连锁矿物数");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var lytMaxMined = new android.widget.LinearLayout(CTX);
	layout.addView(lytMaxMined);
	var edtMaxMined = new android.widget.EditText(CTX);
	edtMaxMined.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
	edtMaxMined.setText(String(veinMiner.maxMined));
	edtMaxMined.addTextChangedListener(new android.text.TextWatcher({onTextChanged: function (s, start, before, count) {
		veinMiner.maxMined = Number(s);
	}}));
	lytMaxMined.addView(edtMaxMined);
	var text = new android.widget.TextView(CTX);
	text.setText("个");
	lytMaxMined.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("矿物");
	text.setTextSize(text.getTextSize());
	layout.addView(text);
	var text = new android.widget.TextView(CTX);
	text.setText("长按以刪除");
	layout.addView(text);
	var scroll = new android.widget.ScrollView(CTX);
	layout.addView(scroll);
	var lytOres = new android.widget.LinearLayout(CTX);
	lytOres.setOrientation(lytOres.VERTICAL);
	scroll.addView(lytOres);
	var button = new android.widget.Button(CTX);
	button.setText("+\n");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		veinMiner.add();
	}}));
	lytOres.addView(button);
	for (var o in veinMiner.ores) {
		var button = new android.widget.Button(CTX);
		button.setText(veinMiner.ores[o] + "\n" + Item.getName(veinMiner.ores[o].split(":")[0], veinMiner.ores[o].split(":")[1]));
		button.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (view) {
			for (var o in veinMiner.ores) if (veinMiner.ores[o] == (view.getText()).split("\n")[0]) veinMiner.ores.splice(o, 1);
			wndVm.dismiss();
			veinMiner.menu();
			return true;
		}}));
		lytOres.addView(button);
	}
	wndVm = new android.widget.PopupWindow(layout, Wnd.WIDTH, Wnd.HEIGHT * 4, true);
	wndVm.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	wndVm.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, Wnd.WIDTH, 0);
}

veinMiner.mine = function (x, y, z, id, data, index, isFirst) {
	if (getTile(x, y, z) == id && (data === undefined || Level.getData(x, y, z) == data) || isFirst) try {
		for (var p in Level.destrocksByMock.threads[index].tiles) if (Level.destrocksByMock.threads[index].tiles[p].x == x && Level.destrocksByMock.threads[index].tiles[p].y == y && Level.destrocksByMock.threads[index].tiles[p].z == z) return;
		Level.destrocksByMock.threads[index].tiles.push(new Point(x, y, z));
		veinMiner.mined++;
		if (veinMiner.mined < veinMiner.maxMined) for (var mx = x - 1; mx <= x + 1; mx++) for (var my = y - 1; my <= y + 1; my++) for (var mz = z - 1; mz <= z + 1; mz++) veinMiner.mine(mx, my, mz, id, data, index);
	} catch (err) {
	}
}

function webView(urlWanald) {
	var layout = new android.widget.LinearLayout(CTX);
	layout.setOrientation(layout.VERTICAL);
	var edtUrl = new android.widget.EditText(CTX);
	edtUrl.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (view, event) {
		if (event.getAction() == event.ACTION_DOWN && edtUrl.getText() == "") edtUrl.setText(web.getUrl());
		return false;
	}}));
	layout.addView(edtUrl);
	var lytCtrl = new android.widget.LinearLayout(CTX);
	layout.addView(lytCtrl);
	var button = new android.widget.Button(CTX);
	button.setText("<");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (web.canGoBack()) web.goBack();
	}}));
	lytCtrl.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText(">");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		if (web.canGoForward()) web.goForward();
	}}));
	lytCtrl.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("↺");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		web.reload();
	}}));
	lytCtrl.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("×");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		web.stopLoading();
	}}));
	lytCtrl.addView(button);
	var button = new android.widget.Button(CTX);
	button.setText("→");
	button.setOnClickListener(new android.view.View.OnClickListener({onClick: function (view) {
		web.loadUrl(edtUrl.getText());
		edtUrl.setText("");
	}}));
	lytCtrl.addView(button);
	var web = new android.webkit.WebView(CTX);
	web.getSettings().setJavaScriptEnabled(true);
	web.setWebChromeClient(new android.webkit.WebChromeClient());
	web.setWebViewClient(new android.webkit.WebViewClient());
	web.loadUrl(urlWanald);
	web.setDownloadListener(new android.webkit.DownloadListener({onDownloadStart: function (url, userAgent, contentDisposition, mimetype, contentLength) {
		CTX.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)));
	}}));
	layout.addView(web);
	var window = new android.widget.PopupWindow(layout, Wnd.WIDTH * 3, Wnd.HEIGHT * 3, true);
	window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 255, 255, 255)));
	window.showAtLocation(CTX.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
}

eval("\x69\x66\x20\x28\x21\x2f\x5e\x28\x6e\x65\x74\x2e\x7a\x68\x75\x6f\x77\x65\x69\x7a\x68\x61\x6e\x67\x2e\x6d\x63\x70\x65\x6c\x61\x75\x6e\x63\x68\x65\x72\x28\x7c\x2e\x70\x72\x6f\x29\x7c\x69\x6f\x2e\x6d\x72\x61\x72\x6d\x2e\x6d\x63\x74\x6f\x6f\x6c\x62\x6f\x78\x29\x24\x2f\x2e\x74\x65\x73\x74\x28\x43\x54\x58\x2e\x67\x65\x74\x50\x61\x63\x6b\x61\x67\x65\x4e\x61\x6d\x65\x28\x29\x29\x29\x20\x6a\x61\x76\x61\x2e\x6c\x61\x6e\x67\x2e\x53\x79\x73\x74\x65\x6d\x2e\x65\x78\x69\x74\x28\x30\x29\x3b");
CTX.runOnUiThread(new java.lang.Runnable({run: function () {
	try {
		ModPE.loadLeaveGame();
		var layout = new android.widget.LinearLayout(CTX);
		respawn.window = new android.widget.PopupWindow(layout, Wnd.WIDTH * 2, Wnd.HEIGHT * 4);
		ctrller.load();
		ModPE.loadTipMsg();
		chat.load();
		rotatroller.load();
		Target.loadSwitcher();
		hbr.loadShooter();
	}
	catch (err) {
	}
}}));
print("\nusefulCommands: 完美适配\t" + FOR);
if (MC_VER.substr(0, FOR.length) != FOR) CTX.runOnUiThread(new java.lang.Runnable({run: function () {
	var alert = new android.app.AlertDialog.Builder(CTX);
	alert.setTitle("不支持的 MC 版本");
	alert.setMessage("一个不支持的 MC 版本被安装在此装置 (" + MC_VER + "). usefulCommands 可能不合理的工作, 幷且它可能闪退或导致问题.");
	alert.setNegativeButton("继续", new android.content.DialogInterface.OnClickListener({onClick: function (dialog, w) {
	}}));
	alert.show();
}}));
showMnuTxt(false);
