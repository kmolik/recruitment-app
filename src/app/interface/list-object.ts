export interface ListObject {
  id: number;
  name: string;
  status: string;
  modifyBy: string;
  modifyDate: string;
  description: boolean;
  triggerdateLbman: boolean;
  triggerdateSvcscat: boolean;
  triggerdateItem: boolean;
  isinterimtrigger: boolean;
  constraintLbman: boolean;
  constraintSvcscat: any;
  constraintItem: boolean;
  purma: boolean;
  nntm: boolean;
  pdbtm: boolean;
  dsart: boolean;
  trigger: number;
  interimtrigger: number;
  constraint: number;
  lbmanEffectivedeadlineinfo: number;
  lbmanProcbasisref: number;
  editable: boolean;
}
