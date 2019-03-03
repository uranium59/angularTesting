export interface AccidentType{
    CarNumber: string;
    CarType: string;
    Date: string;
    FileName: string;
    IsWatched: boolean;
    IsFinished: boolean;
}


export const ACCIDENTS: AccidentType[] = [
    {
      CarNumber: '33다3456',
      CarType: 'SM5',
      Date: '2019-03-01 16:00',
      FileName: 'alwa_20190208_080540_F.MP4',
      IsWatched: true,
      IsFinished: false,
    },
    {
      CarNumber: '50마1234',
      CarType: '소나타',
      Date: '2019-03-02 16:00',
      FileName: 'alwa_20190208_080540_F.MP4',
      IsWatched: false,
      IsFinished: false,
    },
    {
      CarNumber: '33다3456',
      CarType: 'SM5',
      Date: '2019-03-03 16:00',
      FileName: 'alwa_20190208_080540_F.MP4',
      IsWatched: true,
      IsFinished: true,
    },
    {
      CarNumber: '12나3456',
      CarType: '소나타',
      Date: '2019-03-04 16:00',
      FileName: 'alwa_20190208_080540_F.MP4',
      IsWatched: false,
      IsFinished: false,
    },
]