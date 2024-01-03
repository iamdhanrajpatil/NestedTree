import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ChildNode} from 'src/app/model/childnode.interface';
import { TreeDataService } from './services/tree-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  treeControl = new NestedTreeControl<ChildNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ChildNode>();

  constructor(private _dataService:TreeDataService) {
    this.dataSource.data = this._dataService.data;
  }
  hasChild = (_: number, node: ChildNode) => !!node.children && node.children.length > 0;
}
