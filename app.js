const places = [
  { name: "Williamstown Foreshore", zone: "西区海边", time: "35–55 分钟", vibe: "海风 / 夜景", modes: ["any", "night", "short"] },
  { name: "Brighton Beach", zone: "南区海边", time: "35–55 分钟", vibe: "海岸 / 轻松", modes: ["any", "night", "short"] },
  { name: "St Kilda Pier", zone: "湾区", time: "25–45 分钟", vibe: "城市 / 海边", modes: ["any", "night", "short", "rain"] },
  { name: "Black Rock", zone: "Bayside", time: "40–60 分钟", vibe: "安静 / 海边", modes: ["any", "night", "short"] },
  { name: "Werribee South", zone: "西区", time: "45–70 分钟", vibe: "公路 / 海湾", modes: ["any", "night", "weekend"] },
  { name: "Dandenong Ranges", zone: "东区山路", time: "60–90 分钟", vibe: "森林 / 弯道", modes: ["any", "weekend", "rain"] },
  { name: "Olinda", zone: "Dandenong Ranges", time: "60–90 分钟", vibe: "山镇 / 咖啡", modes: ["any", "weekend", "rain"] },
  { name: "Emerald", zone: "东南山麓", time: "60–90 分钟", vibe: "小镇 / 森林", modes: ["any", "weekend"] },
  { name: "Mornington", zone: "Mornington Peninsula", time: "70–100 分钟", vibe: "海岸 / 小镇", modes: ["any", "weekend"] },
  { name: "Mount Martha", zone: "Mornington Peninsula", time: "75–105 分钟", vibe: "海岸 / 日落", modes: ["any", "weekend"] },
  { name: "Sorrento", zone: "Mornington Peninsula", time: "95–135 分钟", vibe: "远一点 / 海风", modes: ["any", "weekend"] },
  { name: "Healesville", zone: "Yarra Valley", time: "75–105 分钟", vibe: "乡路 / 小镇", modes: ["any", "weekend"] },
  { name: "Warburton", zone: "Yarra Valley", time: "90–125 分钟", vibe: "山谷 / 长途", modes: ["any", "weekend"] },
  { name: "Yarra Glen", zone: "Yarra Valley", time: "65–95 分钟", vibe: "乡间 / 开阔", modes: ["any", "weekend"] },
  { name: "Point Cook Coastal Park", zone: "西区", time: "40–65 分钟", vibe: "平路 / 海边", modes: ["any", "short"] },
  { name: "Altona Beach", zone: "西区海边", time: "30–50 分钟", vibe: "轻松 / 夜风", modes: ["any", "night", "short"] },
  { name: "Docklands", zone: "市区", time: "15–35 分钟", vibe: "城市灯光", modes: ["any", "night", "short", "rain"] },
  { name: "Southbank", zone: "市区", time: "15–35 分钟", vibe: "城市 / 夜景", modes: ["any", "night", "short", "rain"] },
  { name: "Albert Park", zone: "内南区", time: "20–40 分钟", vibe: "城市 / 湖边", modes: ["any", "night", "short", "rain"] },
  { name: "Mordialloc", zone: "东南海边", time: "45–70 分钟", vibe: "码头 / 海岸", modes: ["any", "night", "short"] },
  { name: "Frankston Foreshore", zone: "东南", time: "55–80 分钟", vibe: "海岸 / 长直路", modes: ["any", "night", "weekend"] },
  { name: "Pakenham", zone: "东南外缘", time: "55–85 分钟", vibe: "郊区 / 夜路", modes: ["any", "night"] },
  { name: "Berwick Village", zone: "东南", time: "45–70 分钟", vibe: "老街 / 咖啡", modes: ["any", "night", "short", "rain"] },
  { name: "Lysterfield Lake", zone: "东南", time: "45–70 分钟", vibe: "森林 / 湖边", modes: ["any", "weekend"] }
];

const challenges = [
  "到目的地后，只能在步行 10 分钟范围内选一家从没去过的店。",
  "途中遇到第一个让你觉得“这条路挺好看”的地方，安全停车后拍一张照片。",
  "目的地到了以后，不看评分，凭店面第一印象选一家吃或喝。",
  "全程不走你平时最熟的那条主路；导航允许，但必须主动换一次路线。",
  "抵达后找一个能坐 15 分钟的地方，期间不刷短视频。",
  "把这趟车当成电影片头：选一个地方拍 3 张有连续感的照片。",
  "到达后随机选左或右，步行 8 分钟，再决定真正的终点。",
  "今晚只允许买一件东西：必须是你以前没买过的。"
];

const rules = [
  "出发前不能查目的地照片。",
  "到达前不能换目的地，除非道路或安全原因。",
  "去程前 20 分钟不准开导航语音。",
  "全程只能听一张完整专辑，不许切歌。",
  "途中如果看到同型号的车，给自己加 5 澳元预算。",
  "目的地消费上限由随机预算决定，不能临时加码。",
  "返程必须和去程不同路线。",
  "今晚不能去任何你去过三次以上的连锁店。"
];

const carTasks = [
  "找一首你至少 3 年没听过、但以前很喜欢的歌。",
  "每人轮流放一首“对方大概率不知道”的歌。",
  "途中看到三台同品牌车才算完成。",
  "给这趟路线起一个像 GTA 任务一样的名字。",
  "选一个 2000–2015 年之间的歌单，全程只听这个年代。",
  "把手机拍照数量限制在 5 张以内。",
  "找一段没有红绿灯、连续驾驶感最好的路，并记住它。",
  "途中不讨论工作和房子，只聊完全没用但有趣的东西。"
];

const returns = [
  "找到一家还开着、评分先别看、看起来顺眼的店后再返程。",
  "拍到一张你愿意当手机壁纸的照片后才能返程。",
  "在目的地待够 30 分钟再走。",
  "找到一个比预期更安静的地方再返程。",
  "完成主任务后立刻返程，不许临时加第二站。",
  "买到一杯热饮或冷饮后返程。",
  "找到一个你以后愿意带朋友再来的点后返程。",
  "返程前必须决定：这条路线值不值得二刷。"
];

const budgets = ["$0–15", "$15–30", "$30–50", "$50–80", "只付油费"];

const state = {
  mode: "any",
  current: null,
  history: JSON.parse(localStorage.getItem("mmd-history") || "[]")
};

const $ = (id) => document.getElementById(id);
const el = {
  modeGroup: $("modeGroup"), roll: $("rollButton"), destination: $("destination"), subtitle: $("subtitle"),
  duration: $("duration"), budget: $("budget"), vibe: $("vibe"), challenge: $("challenge"), rule: $("rule"),
  carTask: $("carTask"), returnRule: $("returnRule"), tag: $("missionTag"), code: $("missionCode"),
  copy: $("copyButton"), save: $("saveButton"), history: $("history"), clear: $("clearHistory")
};

function pick(array) { return array[Math.floor(Math.random() * array.length)]; }
function code() { return `#${Math.random().toString(16).slice(2, 8).toUpperCase()}`; }

function filteredPlaces() {
  if (state.mode === "any") return places;
  return places.filter((p) => p.modes.includes(state.mode));
}

function generateMission() {
  const place = pick(filteredPlaces());
  return {
    id: code(), place, budget: pick(budgets), challenge: pick(challenges), rule: pick(rules),
    carTask: pick(carTasks), returnRule: pick(returns), mode: state.mode, createdAt: Date.now()
  };
}

function renderMission(mission) {
  state.current = mission;
  el.tag.textContent = `${mission.place.zone} · ${state.mode.toUpperCase()}`;
  el.code.textContent = mission.id;
  el.destination.textContent = mission.place.name;
  el.subtitle.textContent = "目的地不是重点，重点是今晚必须按规则把这趟开完。";
  el.duration.textContent = mission.place.time;
  el.budget.textContent = mission.budget;
  el.vibe.textContent = mission.place.vibe;
  el.challenge.textContent = mission.challenge;
  el.rule.textContent = mission.rule;
  el.carTask.textContent = mission.carTask;
  el.returnRule.textContent = mission.returnRule;
  el.copy.disabled = false;
  el.save.disabled = false;
}

function roll() {
  el.roll.classList.add("rolling");
  let i = 0;
  const interval = setInterval(() => {
    const temp = generateMission();
    el.destination.textContent = temp.place.name;
    el.code.textContent = temp.id;
    i += 1;
    if (i > 7) {
      clearInterval(interval);
      el.roll.classList.remove("rolling");
      const mission = generateMission();
      renderMission(mission);
      addHistory(mission);
    }
  }, 70);
}

function addHistory(mission) {
  state.history = [mission, ...state.history.filter((x) => x.id !== mission.id)].slice(0, 8);
  localStorage.setItem("mmd-history", JSON.stringify(state.history));
  renderHistory();
}

function renderHistory() {
  if (!state.history.length) {
    el.history.className = "history empty";
    el.history.textContent = "还没有记录。";
    return;
  }
  el.history.className = "history";
  el.history.innerHTML = state.history.map((item) => `
    <div class="history-item">
      <div><strong>${item.place.name}</strong><span>${item.place.zone} · ${item.place.time} · ${item.budget}</span></div>
      <span class="mini-code">${item.id}</span>
    </div>
  `).join("");
}

function shareText(m) {
  return `Melbourne Mystery Drive ${m.id}\n目的地：${m.place.name}（${m.place.zone}）\n预计驾驶：${m.place.time}\n预算：${m.budget}\n氛围：${m.place.vibe}\n\n主任务：${m.challenge}\n隐藏规则：${m.rule}\n车内任务：${m.carTask}\n返程条件：${m.returnRule}`;
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  requestAnimationFrame(() => node.classList.add("show"));
  setTimeout(() => { node.classList.remove("show"); setTimeout(() => node.remove(), 220); }, 1400);
}

el.modeGroup.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("active", chip === button));
});

el.roll.addEventListener("click", roll);
el.copy.addEventListener("click", async () => {
  if (!state.current) return;
  await navigator.clipboard.writeText(shareText(state.current));
  toast("挑战已复制");
});
el.save.addEventListener("click", () => {
  if (!state.current) return;
  addHistory(state.current);
  toast("已收藏");
});
el.clear.addEventListener("click", () => {
  state.history = [];
  localStorage.removeItem("mmd-history");
  renderHistory();
});

renderHistory();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});