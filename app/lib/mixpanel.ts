import Mixpanel from "mixpanel";

const mixpanelEvent = Mixpanel.init("79813eefe429c7bea6c59b6b3fe2d49f");

export function trackServerEvent(eventName: string, properties: any) {
  if (process.env.NODE_ENV === "development") return;
  mixpanelEvent.track(eventName, properties);
}
