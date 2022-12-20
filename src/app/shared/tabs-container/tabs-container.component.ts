import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit{
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  ngAfterContentInit(): void {
    const activeTbas = this.tabs?.filter(
      tab => tab.active
    );

    if(!activeTbas || activeTbas.length === 0){
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent){
    // Set all tabs active attribute to false first
    this.tabs?.forEach(tab => {
      tab.active = false;
    })

    tab.active = true;

    return false; // Stop the default behaviour that change the displayed url on click
  }

}
