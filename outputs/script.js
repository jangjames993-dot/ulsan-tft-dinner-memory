const POST_STORAGE_KEY = "companyDinnerPosts";
const FORTUNE_STORAGE_KEY = "companyDinnerFortunes";
const NOTICE_STORAGE_KEY = "companyDinnerNotices";
const ADMIN_SESSION_KEY = "companyDinnerAdminMode";
const ADMIN_PASSWORD = "1234";
const SUPABASE_URL = "https://lnydbnauppqmdgabwzcs.supabase.co";
const SUPABASE_KEY = "sb_publishable_J-9djMrZ7ahSXV6kChryvQ_GNQXzBi4";
const USE_SUPABASE = Boolean(SUPABASE_URL && SUPABASE_KEY);
const fallbackImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='675' viewBox='0 0 900 675'%3E%3Crect width='900' height='675' fill='%23e7efec'/%3E%3Ccircle cx='450' cy='360' r='250' fill='%23f2b84b'/%3E%3Ccircle cx='450' cy='342' r='188' fill='%23fff8dd'/%3E%3Cg fill='%230f766e'%3E%3Ccircle cx='334' cy='284' r='42'/%3E%3Ccircle cx='454' cy='250' r='50'/%3E%3Ccircle cx='574' cy='294' r='44'/%3E%3C/g%3E%3Cg fill='%23ce6a6b'%3E%3Crect x='282' y='398' width='124' height='56' rx='28'/%3E%3Crect x='484' y='408' width='132' height='58' rx='29'/%3E%3C/g%3E%3Cpath d='M260 510c92-55 190-63 294-24 49 19 96 25 141 18' fill='none' stroke='%23202124' stroke-width='14' stroke-linecap='round'/%3E%3Ctext x='450' y='610' text-anchor='middle' font-family='Segoe UI, sans-serif' font-size='44' font-weight='800' fill='%23202124'%3E%ED%9A%8C%EC%8B%9D %EA%B8%B0%EB%A1%9D%3C/text%3E%3C/svg%3E";
const fortunes = [
  { category: "재물", message: "오늘은 작은 선택이 기분 좋은 보상으로 돌아오는 날입니다." },
  { category: "재물", message: "아껴둔 센스가 빛나며 뜻밖의 혜택을 만날 수 있습니다." },
  { category: "재물", message: "가벼운 제안 속에서 실속 있는 기회가 열립니다." },
  { category: "재물", message: "지갑보다 마음이 먼저 넉넉해지고, 좋은 흐름이 따라옵니다." },
  { category: "재물", message: "오늘의 웃음이 다음 기회의 연결고리가 됩니다." },
  { category: "재물", message: "작게 베푼 호의가 크게 돌아오는 운이 있습니다." },
  { category: "재물", message: "계산보다 감각을 믿으면 만족스러운 선택을 하게 됩니다." },
  { category: "재물", message: "좋은 사람 옆에서 좋은 정보도 함께 들어옵니다." },
  { category: "재물", message: "기분 좋게 쓴 돈이 오래 기억될 추억이 됩니다." },
  { category: "재물", message: "오늘은 복이 지갑보다 먼저 웃음으로 들어오는 날입니다." },
  { category: "회사생활", message: "같이 웃는 순간이 앞으로의 협업을 더 부드럽게 만듭니다." },
  { category: "회사생활", message: "평소보다 말이 잘 통하고, 마음의 거리도 자연스럽게 가까워집니다." },
  { category: "회사생활", message: "당신의 편안한 분위기가 팀 전체의 긴장을 풀어줍니다." },
  { category: "회사생활", message: "오늘 나눈 한마디가 다음 업무의 든든한 밑거름이 됩니다." },
  { category: "회사생활", message: "묵묵히 쌓아온 신뢰가 사람들 눈에 더 잘 보이는 날입니다." },
  { category: "회사생활", message: "새로운 조합의 대화에서 반가운 친밀감이 생깁니다." },
  { category: "회사생활", message: "당신의 배려가 분위기를 살리고 좋은 인상을 남깁니다." },
  { category: "회사생활", message: "오늘은 동료들과의 호흡이 한 박자 더 잘 맞습니다." },
  { category: "회사생활", message: "작은 리액션 하나가 누군가에게 큰 힘이 됩니다." },
  { category: "회사생활", message: "회식 자리에서 당신의 존재감이 자연스럽게 빛납니다." },
  { category: "건강", message: "맛있게 먹고 편하게 웃는 시간이 몸과 마음을 가볍게 합니다." },
  { category: "건강", message: "오늘의 즐거운 대화가 피로를 부드럽게 풀어줍니다." },
  { category: "건강", message: "무리하지 않는 선택이 컨디션을 오래 좋게 지켜줍니다." },
  { category: "건강", message: "좋은 사람들과의 식사가 에너지를 채워주는 날입니다." },
  { category: "건강", message: "웃음이 많을수록 내일 아침의 마음도 산뜻해집니다." },
  { category: "건강", message: "오늘은 천천히 즐길수록 몸도 마음도 더 편안해집니다." },
  { category: "건강", message: "가벼운 산책 같은 대화가 마음의 숨통을 틔워줍니다." },
  { category: "건강", message: "컨디션을 챙기는 센스가 주변에도 좋은 영향을 줍니다." },
  { category: "건강", message: "밝은 분위기 속에서 스트레스가 한결 작아집니다." },
  { category: "건강", message: "오늘의 여유가 다음 날의 활력을 만들어줍니다." },
  { category: "가족", message: "따뜻한 말 한마디가 가까운 사람들과의 마음을 더 단단하게 합니다." },
  { category: "가족", message: "오늘의 좋은 기운이 집에 돌아가서도 이어집니다." },
  { category: "가족", message: "소중한 사람에게 전할 이야깃거리가 생기는 날입니다." },
  { category: "가족", message: "가족처럼 편한 동료의 마음을 느낄 수 있습니다." },
  { category: "가족", message: "누군가를 챙기는 당신의 따뜻함이 크게 빛납니다." },
  { category: "가족", message: "편안한 안부가 마음 깊은 곳까지 따뜻하게 닿습니다." },
  { category: "가족", message: "오늘의 추억은 오래 두고 꺼내볼 좋은 이야기가 됩니다." },
  { category: "가족", message: "함께하는 자리가 당신의 다정함을 더 잘 보여줍니다." },
  { category: "가족", message: "가까운 사람과 나누고 싶은 좋은 소식이 생깁니다." },
  { category: "가족", message: "따뜻한 분위기가 하루의 끝을 안정감 있게 감싸줍니다." },
  { category: "업무능력", message: "당신의 판단력은 오늘도 조용히 좋은 방향을 고릅니다." },
  { category: "업무능력", message: "말을 정리하는 능력이 돋보이며 사람들의 신뢰를 얻습니다." },
  { category: "업무능력", message: "센스 있는 한마디가 업무 밖에서도 실력으로 느껴집니다." },
  { category: "업무능력", message: "큰 그림을 보는 감각이 다음 프로젝트에서 힘을 발휘합니다." },
  { category: "업무능력", message: "오늘의 가벼운 대화가 새로운 아이디어의 씨앗이 됩니다." },
  { category: "업무능력", message: "차분하게 듣는 태도가 당신의 강점으로 빛납니다." },
  { category: "업무능력", message: "문제를 부드럽게 풀어내는 능력이 주변에 좋은 인상을 줍니다." },
  { category: "업무능력", message: "당신의 꼼꼼함이 좋은 결과를 만드는 흐름에 올라탑니다." },
  { category: "업무능력", message: "오늘은 자신 있게 말해도 좋은 타이밍이 찾아옵니다." },
  { category: "업무능력", message: "평소의 책임감이 즐거운 자리에서도 든든하게 느껴집니다." },
];
const PRIZE_SOLD_OUT = "경품 소진";
const PRIZE_INVENTORY = [
  { name: "커피쿠폰 3,000원", quantity: 7 },
  { name: "커피쿠폰 5,000원", quantity: 3 },
  { name: "커피쿠폰 10,000원", quantity: 2 },
];
const PRIZE_NAMES = PRIZE_INVENTORY.map((item) => item.name);

const form = document.querySelector("#postForm");
const fortuneForm = document.querySelector("#fortuneForm");
const noticeForm = document.querySelector("#noticeForm");
const titleInput = document.querySelector("#titleInput");
const descriptionInput = document.querySelector("#descriptionInput");
const photoInput = document.querySelector("#photoInput");
const noticeTitleInput = document.querySelector("#noticeTitleInput");
const noticeContentInput = document.querySelector("#noticeContentInput");
const nameInput = document.querySelector("#nameInput");
const birthInput = document.querySelector("#birthInput");
const preview = document.querySelector("#preview");
const postsEl = document.querySelector("#posts");
const noticeList = document.querySelector("#noticeList");
const fortuneHistory = document.querySelector("#fortuneHistory");
const prizeHistory = document.querySelector("#prizeHistory");
const fortuneResult = document.querySelector("#fortuneResult");
const postTemplate = document.querySelector("#postTemplate");
const noticeTemplate = document.querySelector("#noticeTemplate");
const fortuneTemplate = document.querySelector("#fortuneTemplate");
const prizeTemplate = document.querySelector("#prizeTemplate");
const postCount = document.querySelector("#postCount");
const noticeCount = document.querySelector("#noticeCount");
const fortuneCount = document.querySelector("#fortuneCount");
const resetButton = document.querySelector("#resetButton");
const adminToggle = document.querySelector("#adminToggle");

let selectedPhoto = "";
let editingPostId = "";
let editingNoticeId = "";
let posts = loadPosts();
let notices = loadNotices();
let fortuneRecords = loadFortunes();

updateAdminUi();
renderPosts();
renderNotices();
renderFortunes();
renderPrizes();
loadSharedData();

if (adminToggle) {
  adminToggle.addEventListener("click", () => {
    if (isAdminMode()) {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      editingPostId = "";
      editingNoticeId = "";
      selectedPhoto = "";
      form?.reset();
      noticeForm?.reset();
      setSubmitLabel(form, "게시글 등록");
      setSubmitLabel(noticeForm, "공지 등록");
      updateAdminUi();
      renderPosts();
      renderNotices();
      return;
    }

    const password = prompt("관리자 비밀번호를 입력해주세요.");
    if (password === null) return;
    if (password !== ADMIN_PASSWORD) {
      alert("비밀번호가 맞지 않습니다.");
      return;
    }

    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    updateAdminUi();
    renderPosts();
    renderNotices();
  });
}

if (photoInput && preview) {
  photoInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      selectedPhoto = "";
      preview.innerHTML = "<span>사진을 선택하면 미리보기가 표시됩니다.</span>";
      return;
    }

    selectedPhoto = await readFileAsDataUrl(file);
    preview.innerHTML = "";
    const image = document.createElement("img");
    image.src = selectedPhoto;
    image.alt = "선택한 회식 사진 미리보기";
    preview.append(image);
  });
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isAdminMode()) return;

    if (editingPostId) {
      const currentPost = posts.find((post) => post.id === editingPostId);
      const updates = {
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
        image: selectedPhoto || currentPost?.image || fallbackImage,
        updatedAt: new Date().toISOString(),
      };

      if (USE_SUPABASE) {
        await updateRemotePost(editingPostId, updates);
      }
      posts = posts.map((post) => (post.id === editingPostId ? { ...post, ...updates } : post));
    } else {
      const post = {
        id: crypto.randomUUID(),
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
        image: selectedPhoto || fallbackImage,
        createdAt: new Date().toISOString(),
      };

      if (USE_SUPABASE) {
        await createRemotePost(post);
      }
      posts = [post, ...posts];
    }

    savePosts();
    renderPosts();
    refreshPosts();

    form.reset();
    editingPostId = "";
    selectedPhoto = "";
    setSubmitLabel(form, "게시글 등록");
    if (preview) {
      preview.innerHTML = "<span>사진을 선택하면 미리보기가 표시됩니다.</span>";
    }
  });
}

if (noticeForm) {
  noticeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isAdminMode()) return;

    if (editingNoticeId) {
      const updates = {
        title: noticeTitleInput.value.trim(),
        content: noticeContentInput.value.trim(),
        updatedAt: new Date().toISOString(),
      };

      if (USE_SUPABASE) {
        await updateRemoteNotice(editingNoticeId, updates);
      }
      notices = notices.map((notice) => (notice.id === editingNoticeId ? { ...notice, ...updates } : notice));
    } else {
      const notice = {
        id: crypto.randomUUID(),
        title: noticeTitleInput.value.trim(),
        content: noticeContentInput.value.trim(),
        createdAt: new Date().toISOString(),
      };

      if (USE_SUPABASE) {
        await createRemoteNotice(notice);
      }
      notices = [notice, ...notices];
    }

    saveNotices();
    renderNotices();
    refreshNotices();
    noticeForm.reset();
    editingNoticeId = "";
    setSubmitLabel(noticeForm, "공지 등록");
  });
}

if (fortuneForm) {
  fortuneForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const birth = birthInput.value.trim();
    if (!/^\d{6}$/.test(birth)) {
      birthInput.setCustomValidity("숫자 6자리를 입력해주세요.");
      birthInput.reportValidity();
      return;
    }
    birthInput.setCustomValidity("");

    const isPrizePage = Boolean(prizeHistory);
    const fortune = pickRandom(fortunes);
    const prize = isPrizePage ? getNextPrize() : "";
    const record = {
      id: crypto.randomUUID(),
      name,
      birthMask: `${birth.slice(0, 4)}**`,
      category: fortune.category,
      message: fortune.message,
      prize,
      createdAt: new Date().toISOString(),
    };

    if (USE_SUPABASE) {
      await createRemoteFortune(record);
    }
    fortuneRecords = [record, ...fortuneRecords];
    saveFortunes();
    renderFortunes();
    renderPrizes();
    refreshFortunes();
    renderCurrentFortune(record);
    fortuneForm.reset();
  });
}

if (resetButton) {
  resetButton.addEventListener("click", async () => {
    if (!isAdminMode()) return;
    if (!posts.length && !notices.length && !fortuneRecords.length) return;
    const shouldReset = confirm("등록한 공지, 게시글, 운세 및 경품 기록을 모두 초기화할까요?");
    if (!shouldReset) return;

    if (USE_SUPABASE) {
      await deleteAllRemote("posts");
      await deleteAllRemote("notices");
      await deleteAllRemote("fortune_records");
    }
    posts = [];
    notices = [];
    fortuneRecords = [];
    editingPostId = "";
    editingNoticeId = "";
    savePosts();
    saveNotices();
    saveFortunes();
    renderPosts();
    renderNotices();
    renderFortunes();
    renderPrizes();
    if (fortuneResult) {
      fortuneResult.innerHTML = prizeHistory
        ? `
          <p class="eyebrow">결과</p>
          <h3>경품 추천을 기다리는 중입니다.</h3>
          <p>남은 쿠폰 중 하나가 표시되고 아래 히스토리에 저장됩니다. 모두 소진되면 소진 안내가 나옵니다.</p>
        `
        : `
          <p class="eyebrow">결과</p>
          <h3>아직 뽑은 운세가 없습니다.</h3>
          <p>재물, 회사생활, 건강, 가족, 업무능력 중 하나의 긍정 운세가 나옵니다.</p>
        `;
    }
  });
}

function renderPosts() {
  if (!postsEl || !postCount) return;

  postsEl.innerHTML = "";
  postCount.textContent = posts.length;

  if (!posts.length) {
    postsEl.innerHTML = `
      <article class="post-card">
        <img class="post-image" src="${fallbackImage}" alt="회식 기본 이미지" />
        <div class="post-body">
          <div class="post-meta"><span>예시</span><time>오늘</time></div>
          <h3>첫 회식 게시글을 등록해보세요</h3>
          <p>사진을 선택하고 제목과 설명을 입력하면 이곳에 회식별 게시글이 쌓입니다.</p>
        </div>
      </article>
    `;
    return;
  }

  posts.forEach((post) => {
    const card = postTemplate.content.cloneNode(true);
    const image = card.querySelector(".post-image");
    const time = card.querySelector("time");

    image.src = post.image;
    image.alt = `${post.title} 사진`;
    time.textContent = formatDate(post.createdAt);
    time.dateTime = post.createdAt;
    card.querySelector("h3").textContent = post.title;
    card.querySelector("p").textContent = post.description;
    const actions = card.querySelector("[data-admin-only]");
    if (actions) actions.hidden = !isAdminMode();
    if (isAdminMode()) {
      card.querySelector(".edit-post-button").addEventListener("click", () => editPost(post.id));
      card.querySelector(".delete-post-button").addEventListener("click", () => deletePost(post.id));
    }

    postsEl.append(card);
  });
}

function editPost(id) {
  if (!isAdminMode()) return;
  const post = posts.find((item) => item.id === id);
  if (!post || !form) return;

  editingPostId = id;
  selectedPhoto = "";
  titleInput.value = post.title;
  descriptionInput.value = post.description;
  setSubmitLabel(form, "수정 저장");
  if (preview) {
    preview.innerHTML = "";
    const image = document.createElement("img");
    image.src = post.image;
    image.alt = "수정 중인 회식 사진";
    preview.append(image);
  }
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deletePost(id) {
  if (!isAdminMode()) return;
  const post = posts.find((item) => item.id === id);
  if (!post) return;
  const shouldDelete = confirm(`"${post.title}" 게시글을 제거할까요?`);
  if (!shouldDelete) return;

  if (USE_SUPABASE) {
    await deleteRemotePost(id);
  }
  posts = posts.filter((item) => item.id !== id);
  if (editingPostId === id) {
    editingPostId = "";
    selectedPhoto = "";
    form?.reset();
    setSubmitLabel(form, "게시글 등록");
    if (preview) {
      preview.innerHTML = "<span>사진을 선택하면 미리보기가 표시됩니다.</span>";
    }
  }
  savePosts();
  renderPosts();
  refreshPosts();
}

function loadPosts() {
  try {
    return JSON.parse(localStorage.getItem(POST_STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function savePosts() {
  localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(posts));
}

async function loadSharedData() {
  if (!USE_SUPABASE) return;
  await Promise.all([refreshPosts(), refreshNotices(), refreshFortunes()]);
}

async function refreshPosts() {
  if (USE_SUPABASE) {
    try {
      posts = await fetchRemotePosts();
    } catch (error) {
      console.error("Supabase posts load failed", error);
    }
  }
  savePosts();
  renderPosts();
}

async function refreshNotices() {
  if (USE_SUPABASE) {
    try {
      notices = await fetchRemoteNotices();
    } catch (error) {
      console.error("Supabase notices load failed", error);
    }
  }
  saveNotices();
  renderNotices();
}

async function refreshFortunes() {
  if (USE_SUPABASE) {
    try {
      fortuneRecords = await fetchRemoteFortunes();
    } catch (error) {
      console.error("Supabase fortunes load failed", error);
    }
  }
  saveFortunes();
  renderFortunes();
  renderPrizes();
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`${response.status} ${detail}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function fetchRemotePosts() {
  const rows = await supabaseRequest("posts?select=*&order=created_at.desc");
  return rows.map(fromRemotePost);
}

async function createRemotePost(post) {
  await supabaseRequest("posts", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(toRemotePost(post)),
  });
}

async function updateRemotePost(id, post) {
  await supabaseRequest(`posts?id=eq.${id}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(toRemotePost(post)),
  });
}

async function deleteRemotePost(id) {
  await supabaseRequest(`posts?id=eq.${id}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
}

async function fetchRemoteNotices() {
  const rows = await supabaseRequest("notices?select=*&order=created_at.desc");
  return rows.map(fromRemoteNotice);
}

async function createRemoteNotice(notice) {
  await supabaseRequest("notices", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(toRemoteNotice(notice)),
  });
}

async function updateRemoteNotice(id, notice) {
  await supabaseRequest(`notices?id=eq.${id}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(toRemoteNotice(notice)),
  });
}

async function deleteRemoteNotice(id) {
  await supabaseRequest(`notices?id=eq.${id}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
}

async function fetchRemoteFortunes() {
  const rows = await supabaseRequest("fortune_records?select=*&order=created_at.desc");
  return rows.map(fromRemoteFortune);
}

async function createRemoteFortune(record) {
  await supabaseRequest("fortune_records", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(toRemoteFortune(record)),
  });
}

async function deleteRemoteFortune(id) {
  await supabaseRequest(`fortune_records?id=eq.${id}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
}

async function deleteAllRemote(tableName) {
  await supabaseRequest(`${tableName}?id=not.is.null`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
}

function toRemotePost(post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    image: post.image,
    created_at: post.createdAt,
    updated_at: post.updatedAt,
  };
}

function fromRemotePost(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    image: row.image || fallbackImage,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function toRemoteNotice(notice) {
  return {
    id: notice.id,
    title: notice.title,
    content: notice.content,
    created_at: notice.createdAt,
    updated_at: notice.updatedAt,
  };
}

function fromRemoteNotice(row) {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function toRemoteFortune(record) {
  return {
    id: record.id,
    name: record.name,
    birth_mask: record.birthMask,
    category: record.category,
    message: record.message,
    prize: record.prize,
    created_at: record.createdAt,
  };
}

function fromRemoteFortune(row) {
  return {
    id: row.id,
    name: row.name,
    birthMask: row.birth_mask,
    category: row.category,
    message: row.message,
    prize: row.prize,
    createdAt: row.created_at,
  };
}

function loadNotices() {
  try {
    return JSON.parse(localStorage.getItem(NOTICE_STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveNotices() {
  localStorage.setItem(NOTICE_STORAGE_KEY, JSON.stringify(notices));
}

function renderNotices() {
  if (!noticeList || !noticeCount) return;

  noticeList.innerHTML = "";
  noticeCount.textContent = notices.length;

  if (!notices.length) {
    noticeList.innerHTML = `
      <article class="notice-card">
        <div class="post-meta"><span>예시</span><time>오늘</time></div>
        <h3>첫 회식 공지를 등록해보세요</h3>
        <p>제목과 내용을 입력하면 회식 일정, 장소, 안내사항을 이곳에 저장할 수 있습니다.</p>
      </article>
    `;
    return;
  }

  notices.forEach((notice) => {
    const card = noticeTemplate.content.cloneNode(true);
    const time = card.querySelector("time");

    time.textContent = formatDate(notice.createdAt);
    time.dateTime = notice.createdAt;
    card.querySelector("h3").textContent = notice.title;
    card.querySelector("p").textContent = notice.content;
    const actions = card.querySelector("[data-admin-only]");
    if (actions) actions.hidden = !isAdminMode();
    if (isAdminMode()) {
      card.querySelector(".edit-notice-button").addEventListener("click", () => editNotice(notice.id));
      card.querySelector(".delete-notice-button").addEventListener("click", () => deleteNotice(notice.id));
    }

    noticeList.append(card);
  });
}

function editNotice(id) {
  if (!isAdminMode()) return;
  const notice = notices.find((item) => item.id === id);
  if (!notice || !noticeForm) return;

  editingNoticeId = id;
  noticeTitleInput.value = notice.title;
  noticeContentInput.value = notice.content;
  setSubmitLabel(noticeForm, "수정 저장");
  noticeForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deleteNotice(id) {
  if (!isAdminMode()) return;
  const notice = notices.find((item) => item.id === id);
  if (!notice) return;
  const shouldDelete = confirm(`"${notice.title}" 공지를 제거할까요?`);
  if (!shouldDelete) return;

  if (USE_SUPABASE) {
    await deleteRemoteNotice(id);
  }
  notices = notices.filter((item) => item.id !== id);
  if (editingNoticeId === id) {
    editingNoticeId = "";
    noticeForm?.reset();
    setSubmitLabel(noticeForm, "공지 등록");
  }
  saveNotices();
  renderNotices();
  refreshNotices();
}

function loadFortunes() {
  try {
    return JSON.parse(localStorage.getItem(FORTUNE_STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveFortunes() {
  localStorage.setItem(FORTUNE_STORAGE_KEY, JSON.stringify(fortuneRecords));
}

function renderCurrentFortune(record) {
  if (!fortuneResult) return;

  if (prizeHistory) {
    const isSoldOut = record.prize === PRIZE_SOLD_OUT;
    fortuneResult.innerHTML = isSoldOut
      ? `
        <p class="eyebrow">경품 소진</p>
        <h3>${escapeHtml(record.name)}님, 준비된 경품이 모두 소진되었습니다.</h3>
        <div class="result-prize">경품 결과 <span>${PRIZE_SOLD_OUT}</span></div>
      `
      : `
        <p class="eyebrow">추천 경품</p>
        <h3>${escapeHtml(record.name)}님 경품은 ${escapeHtml(record.prize)}입니다.</h3>
        <div class="result-prize">경품 결과 <span>${escapeHtml(record.prize)}</span></div>
      `;
    return;
  }

  fortuneResult.innerHTML = `
    <p class="eyebrow">${record.category} 운세</p>
    <h3>${escapeHtml(record.name)}님, 오늘의 운세가 아주 좋습니다.</h3>
    <p>${escapeHtml(record.message)}</p>
  `;
}

function renderFortunes() {
  if (!fortuneHistory || !fortuneTemplate) return;

  const records = fortuneRecords.filter(isFortuneOnlyRecord);
  if (fortuneCount) {
    fortuneCount.textContent = records.length;
  }
  fortuneHistory.innerHTML = "";

  if (!records.length) {
    fortuneHistory.innerHTML = `
      <article class="fortune-card">
        <div class="fortune-card-top"><span class="fortune-category">예시</span><time>오늘</time></div>
        <h3>회식 운세를 뽑아보세요</h3>
        <p class="fortune-message">운세 결과가 이곳에 기록되어 회식 추억으로 남습니다.</p>
        <p class="birth-mask">기록 예시: 9001**</p>
      </article>
    `;
    return;
  }

  records.forEach((record) => {
    const card = fortuneTemplate.content.cloneNode(true);
    const time = card.querySelector("time");

    card.querySelector(".fortune-category").textContent = record.category;
    time.textContent = formatDate(record.createdAt);
    time.dateTime = record.createdAt;
    card.querySelector("h3").textContent = `${record.name}님의 회식 운세`;
    card.querySelector(".fortune-message").textContent = record.message;
    card.querySelector(".birth-mask").textContent = `기록: ${record.birthMask}`;
    const actions = card.querySelector("[data-admin-only]");
    if (actions) actions.hidden = !isAdminMode();
    if (isAdminMode()) {
      card.querySelector(".delete-fortune-button").addEventListener("click", () => deleteFortuneRecord(record.id));
    }

    fortuneHistory.append(card);
  });
}

function renderPrizes() {
  if (!prizeHistory || !prizeTemplate) return;

  const records = fortuneRecords.filter(isPrizeRecord);
  if (fortuneCount) {
    fortuneCount.textContent = records.length;
  }
  prizeHistory.innerHTML = "";

  if (!records.length) {
    prizeHistory.innerHTML = `
      <article class="fortune-card prize-card">
        <div class="fortune-card-top"><span>예시</span><time>오늘</time></div>
        <h3>경품 추천을 받아보세요</h3>
        <div class="prize-box"><span>추천 경품</span><strong>커피쿠폰</strong></div>
        <p class="birth-mask">기록 예시: 9001**</p>
      </article>
    `;
    return;
  }

  records.forEach((record) => {
    const card = prizeTemplate.content.cloneNode(true);
    const time = card.querySelector("time");

    time.textContent = formatDate(record.createdAt);
    time.dateTime = record.createdAt;
    card.querySelector("h3").textContent = `${record.name}님의 경품 결과`;
    card.querySelector(".prize-box strong").textContent = record.prize;
    card.querySelector(".birth-mask").textContent = `기록: ${record.birthMask}`;
    const actions = card.querySelector("[data-admin-only]");
    if (actions) actions.hidden = !isAdminMode();
    if (isAdminMode()) {
      card.querySelector(".delete-prize-button").addEventListener("click", () => deleteFortuneRecord(record.id));
    }

    prizeHistory.append(card);
  });
}

async function deleteFortuneRecord(id) {
  if (!isAdminMode()) return;
  const record = fortuneRecords.find((item) => item.id === id);
  if (!record) return;
  const shouldDelete = confirm(`"${record.name}"님의 운세/경품 기록을 제거할까요?`);
  if (!shouldDelete) return;

  if (USE_SUPABASE) {
    await deleteRemoteFortune(id);
  }
  fortuneRecords = fortuneRecords.filter((item) => item.id !== id);
  saveFortunes();
  renderFortunes();
  renderPrizes();
  refreshFortunes();
  if (fortuneResult) {
    fortuneResult.innerHTML = prizeHistory
      ? `
        <p class="eyebrow">결과</p>
        <h3>경품 추천을 기다리는 중입니다.</h3>
        <p>남은 쿠폰 중 하나가 표시되고 아래 히스토리에 저장됩니다. 모두 소진되면 소진 안내가 나옵니다.</p>
      `
      : `
        <p class="eyebrow">결과</p>
        <h3>아직 뽑은 운세가 없습니다.</h3>
        <p>재물, 회사생활, 건강, 가족, 업무능력 중 하나의 긍정 운세가 나옵니다.</p>
      `;
  }
}

function getNextPrize() {
  const usedCounts = countUsedPrizes();
  const availableTypes = PRIZE_INVENTORY.filter((item) => {
    const used = usedCounts[item.name] || 0;
    return used < item.quantity;
  });

  if (!availableTypes.length) return PRIZE_SOLD_OUT;
  return pickRandom(availableTypes).name;
}

function countUsedPrizes() {
  return fortuneRecords.reduce((counts, record) => {
    if (PRIZE_NAMES.includes(record.prize)) {
      counts[record.prize] = (counts[record.prize] || 0) + 1;
    }
    return counts;
  }, {});
}

function isPrizeRecord(record) {
  return PRIZE_NAMES.includes(record.prize) || record.prize === PRIZE_SOLD_OUT;
}

function isFortuneOnlyRecord(record) {
  return !isPrizeRecord(record);
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setSubmitLabel(targetForm, label) {
  const button = targetForm?.querySelector('button[type="submit"]');
  if (button) button.textContent = label;
}

function isAdminMode() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function updateAdminUi() {
  const isAdmin = isAdminMode();
  document.body.classList.toggle("is-admin", isAdmin);
  document.querySelectorAll("[data-admin-only]").forEach((element) => {
    element.hidden = !isAdmin;
  });
  if (adminToggle) {
    adminToggle.textContent = isAdmin ? "관리자 종료" : "관리자 모드";
    adminToggle.setAttribute("aria-pressed", String(isAdmin));
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function formatDate(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}
