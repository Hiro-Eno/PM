// glossaryファイル PM
`use strict`
const glossary = [
{target:`PMの仕事`, content:`プロダクトを成功させること。<br>プロダクトの成功を生み出すのは①ビジョン、②ユーザー価値、③事業収益。この3要素のバランスを保つこと。そのために、①プロダクトを育てること、②プロダクトチームを率いること。<br>中長期の戦略立案、ビジョンの構築、プロダクトのビジネス、開発、UXのすべてのプロセスに関わり、ステークホルダーの承認を得たうえでプロダクトに関係する意思決定に責任を持つ。`},
{target:`ビジョン`, content:`プロダクトを通して作り出したい未来の世界観。<br>現実に最適化しすぎていては未来は作れない。実現のためにはユーザーをも変化させることが時には必要。`},
{target:`ユーザー価値`, content:`ユーザーに価値があると感じてもらい、使い続けてもらう。<br>まずは、価値を提案するユーザーを定義する。どのユーザーに、どんな価値を提案するか選定し、その価値検証を通して、ユーザーが本当に価値を感じるプロダクトを目指していく。`},
{target:`事業収益`, content:`市場を観察し、競合と異なる戦略を打ち出して、ビジネスモデルを構築する。`},
{target:`プロダクトの成功`, content:`プロダクトのビジョンに向かって、ユーザー価値と事業収益を同時に満たすプロダクトを模索する。`},
{target:`プロダクトのバランス`, content:`ユーザー価値と事業収益は、時に同時に満たすことが難しくトレードオフの関係になりうる。また、実現のためにはユーザーをも変化させることが時には必要。この3要素は互いに影響するため、PMの仕事の一つは3要素のバランスを保つこと。`},
{target:`プロダクトステージ`, content:`3つのステージからなり、プロダクトを0から立ち上げた時（0→1ステージ）、ユーザーがどんどん増えていく時期（1→10ステージ）、プロダクトが大きく成長した後（10→100ステージ）。`},
{target:`0→1ステージ`, content:`プロダクトを0から立ち上げた時。プロダクトの価値がユーザーに受け入れられるかの価値検証を繰り返し、PMFを見つける。`},
{target:`1→10ステージ`, content:`ユーザーがどんどん増えていく時期。ユーザーに期待される機能を提供し、安定した事業収益を得る。<br>ビジネスや組織の成長スピードとプロダクトに対するユーザーの期待値をうまくコントロールしなければ破綻する。`},
{target:`10→100ステージ`, content:`プロダクトが大きく成長した後。多くのユーザーに使われる責任のある堅牢な仕組みを作ること。<br>市場の中で確固たるポジションを確立。`},
{target:`PMF（Product Market Fit）`, content:`強力な価値仮説を見つけること。<br>価値仮説とは、なぜユーザーや顧客がプロダクトを使うのかを説明しうる重要な仮説のこと。ユーザーが使いたいと思う理由は、プロダクトに価値を感じているからである。ユーザーと価値が結びついた時に成立する仮説が検証できたといえる。`},
{target:`革新的な製品`, content:`既存のプロダクトやソリューションよりも10倍良いものを目指すべし（ピーター・ティール著書 ZERO to ONE）。<br>価値の輪郭がはっきりしていないと、ユーザーを引き付けることはできない。当たり前の部分に対して疑問を持ち、現状維持で良いという組織内の完成に挑んでいく必要がある。`},
{target:`PMに必要な領域`, content:`ビジネス、UX、テクノロジーの3領域。`},
{target:`ビジネス領域`, content:`プロダクトが市場でユーザーを獲得し、収益を上げることができるかを判断する領域。`},
{target:`UX領域`, content:`ユーザーが本当に求めているものを発見し、使われる形で提供するための領域。`},
{target:`テクノロジー領域`, content:`実現可能性を判断する領域。`},
{target:`プロダクト`, content:`市場において顧客となりうる個人や団体に価値を提案するもの。<br>終了時期があらかじめ定められていない。価値を提案し続ける。プロジェクトを内包する概念。<br>企画や、企画の意図通りに動作する機能、ユーザーの操作性を考えたデザインなどから構成される。`},
{target:`プロダクト群`, content:`共通のビジョンを持った複数のプロダクト。`},
{target:`新しいカスタマーサポート`, content:`サポートの域を超えて能動的に働きかけること。カスタマーサクセス。`},
{target:`狭義のプロダクト`, content:`ソフトウェア。`},
{target:`広義のプロダクト`, content:`ソフトウェアに加え、事業との垣根がなくなった営業、PR、カスタマーサポート、マーケティングなどを含む。<br>PMは事業（プロダクト）の成功に責任を持つ。`},
{target:`プロジェクト`, content:`ある目的のもと、開始時期と終了時期が定義された活動。`},
{target:`QCD（Quality, Cost, Delivery）`, content:`プロジェクトの管理対象。品質、費用、納期。`},
{target:`プロジェクトマネジメント`, content:`プロジェクトの管理を中心とし、活動を管理すること。`},
{target:`プロダクトマネージャーの呼称`, content:`PMもしくはPdM。欧米ではPM。`},
{target:`プロジェクトマネージャーの呼称`, content:`PM。欧米ではPJM。`},
{target:`プロダクト志向`, content:`チームメンバー全員が、プロダクト全体のことを考えること。`},
{target:`プロダクト志向の組織`, content:`部署の目標とプロダクトの成功がつながっている。<br>部署ごとの目指す方針に祭が無く、プロダクトの成功に非協力的な部署もない。`},
{target:`プロダクト志向の営業`, content:`プロダクトが、ターゲットとするユーザーかどうかを判断し、ユーザーからの要望であったとしてもプロダクトの成功につながらないものにはNoといえる。`},
{target:`プロダクト志向の開発`, content:`プロダクトの価値を高めるための方法を模索。`},
{target:`プロダクト志向のカスタマーサクセス`, content:`どうすればユーザーがヘルプ機能に頼らずにプロダクトを使いこなせるか考える。`},
{target:`プロダクト志向のチャレンジ`, content:`プロダクトをするためのチャレンジをいとわない。チャレンジしたことが称賛され、失敗することも当然だと考えられている。`},
{target:`プロダクトを良くする試み`, content:`仮説と検証。<br>素早く仮説を検証し、小さく失敗を繰り返しながら失敗を次に活かしていく。そのためにチーム全員が協力し、ユーザーに受け入れられることが無かった仮説も次の学びを得るための必要な仕事であったと受け入れられる。`},
{target:`プロダクトチームの構成`, content:`PMは、各機能型組織から必要なメンバーを獲得し、組織に横ぐしを通すようにチームを構成する。<br>各機能：PM、エンジニア、デザイナー、品質保証、法務、マーケティング、広報、営業、カスタマーサポート`},
{target:`プロダクトチームのメンバー（例）`, content:`PM、事業責任者、デザイナー（UX、UI）、リサーチャー（UX）、エンジニア、プロダクトマーケティングマネージャー（PMM）、QA担当者、プロジェクトマネージャー（PJM）、カスタマーサポート、カスタマーサクセス、営業、法務。`},
{target:`プロダクトチームの事業責任者`, content:`プロダクトの事業収益に責任を持つ。`},
{target:`プロダクトチームのUXデザイナー`, content:`プロダクトのデザインなどを通じて一気通貫したUXを検討する。`},
{target:`プロダクトチームのUIデザイナー`, content:`実際にユーザが触れるUIを設計する。`},
{target:`プロダクトチームのUXリサーチャー`, content:`プロダクトのUXを考えるために、ユーザーの課題やニーズを見つける。`},
{target:`プロダクトチームのエンジニア`, content:`プロダクトの実現に必要となる技術に責任を持つ。どのように実現するかを検討し、実装する。`},
{target:`プロダクトチームのプロダクトマーケティングマネージャー（PMM）`, content:`プロダクトのビジョンを実現することができるユーザーを探し、プロダクトをそのユーザーに届ける、`},
{target:`プロダクトチームのQA担当者`, content:`プロダクトのすべての品質保証（Quality Assurance）に責任をもつ。`},
{target:`プロダクトチームのPJM`, content:`プロジェクトの品質（Quality）、費用（Cost）、納期（Delivery）に責任を持つ。`},
{target:`プロダクトチームのカスタマーサポート`, content:`ユーザーと接点を持ち、ユーザーのプロダクト利用上の障害を解決する。`},
{target:`プロダクトチームのカスタマーサクセス`, content:`ユーザーと接点を持ち、プロダクト利用上の障害を能動的に解決し、継続利用を促す。`},
{target:`プロダクトチームの営業`, content:`プロダクトの売上を最大化するために、ユーザーにプロダクトの価値を伝え、販売する。`},
{target:`プロダクトチームの法務`, content:`プロダクトが法令や条例、ガイドラインなどに則しているかを確認する。`},
{target:`プロダクトをとりまくステークホルダー（例）`, content:`最終意思決定者（CEOなど）、意思決定関与者（CTO、CPOなど）、機能型組織のマネージャー`},
{target:`プロダクトの階層`, content:`プロダクトの仮説の連鎖を可視化するため、①Core、②Why、③What、④Howの4つの階層に分解。<br>階層の上にあるものが、その下の階層の全芸上限となり、上の階層に変更があった場合にはその下の階層は再検討が必要となる。`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
{target:`nan`, content:`nan`},
]