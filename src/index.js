// styles.cssを使えるようにする
import "./styles.css";
// 追加ボタンを実行したら呼び出されるメソッド
const onClickAdd = () => {
  //inputタグに入力された値の取得
  const inputText = document.getElementById("add-text").value;
  // inputの中身の初期化
  document.getElementById("add-text").value = "";
  // 未完了のToDoリストにinputタグに入力された値と完了、削除ボタンを追加するメソッドを呼び出す
  addIncompleteList(inputText);

  // 削除ボタンを作成する

  // const completeclickevent = () => {
  //   const addTarget = completeButton.parentNode.parentNode;
  //   const text = addTarget.firstChild.firstChild.innerText;
  //   addTarget.firstChild.textContent = null;
  //   const p = document.createElement("p");
  //   p.innerText = text;
  // };
};

// 未完了のToDoリストにinputタグに入力された値を追加するメソッドの定義
const addIncompleteList = (inputText) => {
  // liタグを作る
  const li = document.createElement("li");
  // liタグのclassに"list"をつける
  li.className = "list";
  // divタグを生成
  const div = document.createElement("div");
  //  生成したdivタグにclass"list-row"をつける
  div.className = "list-row";
  // pタグを作る
  const p = document.createElement("p");
  // 生成したpタグに渡された引数（inputタグに入力された値）をpタグの中身として入れる
  p.innerText = inputText;
  // ボタンを作成する
  const completeButton = document.createElement("button");
  //  生成したボタン要素の中身に”完了”を入れる
  completeButton.innerText = "完了";
  // ”完了”ボタンにclickイベントをつける　実行される内容を定義
  completeButton.addEventListener("click", () => {
    // ToDoリストから生成された"完了”ボタンの属する要素削除するメソッドを実行
    deleteFromIncompletelist(completeButton, "incomplete-list");
    // ”完了”ボタンの親要素を取得(<li>タグ以下の要素)
    const addTarget = completeButton.parentNode.parentNode;
    // 上の要素の一番初めの子要素(<div>タグ)の一番初めの子要素(<p>タグ)の中身の文字列を取得
    const text = addTarget.firstChild.firstChild.innerText;
    // addTargetに入る<li>タグの子要素<div>タグの中身を空にする
    addTarget.firstChild.textContent = null;
    // pタグを生成
    const p = document.createElement("p");
    // 生成したpタグに上で取得しておいたtext文字列を中身に入れる
    p.innerText = text;
    // <div>タグより下を削除したaddTargetに上のpタグを入れる
    addTarget.firstChild.appendChild(p);
    // ボタンを生成する
    const backButton = document.createElement("button");
    // 戻すボタンにクリックイベントを追加
    // backButton.addEventListener("click", () => {
    //   // deleteFromIncompletelist(backButton, "complete-list");
    //   // const text = backButton.parentNode.firstChild.innertext;
    //   console.log(inputText);
    //   addIncompleteList();
    // });
    // 生成したボタンに"戻す"という中身を入れる
    backButton.innerText = "戻す";
    // 戻すボタンにclickイベントを付与　実行される内容を定義
    backButton.addEventListener("click", () => {
      // 生成された戻すボタンの親要素を完了したToDoリストから削除するメソッドの実行
      deleteFromIncompletelist(backButton, "complete-list");
      // 未完了のToDoリストにinputTextを入れて完了、削除ボタンを入れて再構築
      // inputTextは追加の時に入れた文字列が入っている
      addIncompleteList(inputText);
    });
    // addTarget.firstChild.appendChild(p);
    // addTargetに戻すボタンを追加
    addTarget.firstChild.appendChild(backButton);
    // id="complete-list"の要素を取得してそのに上で定義した要素addTargetを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // ボタンを生成
  const deleteButton = document.createElement("button");
  // 生成されたボタンの中身に削除という文字を追加
  deleteButton.innerText = "削除";
  // 削除buttonにclickイベントリスナーを設置 実行される内容を定義
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの属する要素を未完了のToDoから削除する
    deleteFromIncompletelist(deleteButton, "incomplete-list");
  });

  // 生成したdivタグの中に、生成した、pタグを入れる
  // 生成したdivタグの中に、生成した完了buttonを入れる
  // 生成したdivタグの中に、生成した削除buttonを入れる
  // 生成したliタグの中に、生成したdivタグを入れる
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 生成したliタグを"incomplete-list"の中に入れる
  document.getElementById("incomplete-list").appendChild(li);
};

// 要素を削除するメソッドの定義
const deleteFromIncompletelist = (target, s) => {
  // 第一引数の親の要素の親の要素を取得
  const completeTarget = target.parentNode.parentNode;
  // 第二引数の名前を持つidの要素から上の要素を削除する
  document.getElementById(s).removeChild(completeTarget);
};

// このファイルが読み込まれたら追加ボタンを取得して、clickイベントをつけてクリックされたら、onClickAddを実行するようにする
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
